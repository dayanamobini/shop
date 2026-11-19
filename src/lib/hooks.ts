import { useCallback, useEffect, useRef, useState } from 'react'

/* -------------------------------------------------------------------------- */
/*  Router                                                                     */
/* -------------------------------------------------------------------------- */

const listeners = new Set<() => void>()

const normalize = (path: string) => path.replace(/\/+$/, '') || '/'
const currentUrl = () =>
  window.location.pathname + window.location.search + window.location.hash

export function navigate(to: string, options: { replace?: boolean } = {}) {
  const next = to.startsWith('/') ? to : `/${to}`
  if (next === window.location.pathname + window.location.search + window.location.hash) return
  if (options.replace) window.history.replaceState({}, '', next)
  else window.history.pushState({}, '', next)
  listeners.forEach((listener) => listener())
}

export function useLocation() {
  const [url, setUrl] = useState(currentUrl)

  useEffect(() => {
    const update = () => setUrl(currentUrl())
    listeners.add(update)
    window.addEventListener('popstate', update)
    return () => {
      listeners.delete(update)
      window.removeEventListener('popstate', update)
    }
  }, [])

  return url
}

export function usePath() {
  return normalize(useLocation().split('?')[0].split('#')[0])
}

export function useSearch() {
  const url = useLocation()
  return new URLSearchParams(url.split('?')[1]?.split('#')[0] ?? '')
}

export function useHash() {
  const url = useLocation()
  const index = url.indexOf('#')
  return index >= 0 ? url.slice(index + 1) : ''
}

/** Matches `/product/:slug` style patterns. */
export function useParams(pattern: string) {
  const path = usePath()
  const pathParts = path.split('/').filter(Boolean)
  const patternParts = pattern.split('/').filter(Boolean)
  if (pathParts.length !== patternParts.length) return null
  const params: Record<string, string> = {}
  for (let i = 0; i < patternParts.length; i += 1) {
    const part = patternParts[i]
    if (part.startsWith(':')) params[part.slice(1)] = decodeURIComponent(pathParts[i])
    else if (part !== pathParts[i]) return null
  }
  return params
}

/* -------------------------------------------------------------------------- */
/*  Hooks                                                                      */
/* -------------------------------------------------------------------------- */

export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? (JSON.parse(raw) as T) : initial
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* storage can be unavailable in private mode */
    }
  }, [key, value])

  return [value, setValue] as const
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(query.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return reduced
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])
  return matches
}

export function useEscape(active: boolean, onEscape: () => void) {
  const handler = useRef(onEscape)
  handler.current = onEscape
  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handler.current()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active])
}

export function useBodyLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [locked])
}

export function useClickOutside<T extends HTMLElement>(
  active: boolean,
  onOutside: () => void,
) {
  const ref = useRef<T>(null)
  const handler = useRef(onOutside)
  handler.current = onOutside
  useEffect(() => {
    if (!active) return
    const onDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler.current()
      }
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [active])
  return ref
}

/** Adds `is-visible` once the element scrolls into view. */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}

/** Writes a small parallax offset to `--parallax` on the element. */
export function useParallax<T extends HTMLElement>(strength = 40) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()

  const onScroll = useCallback(() => {
    const el = ref.current
    if (!el || reduced) return
    const rect = el.getBoundingClientRect()
    const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
    el.style.setProperty('--parallax', `${(-progress * strength).toFixed(1)}px`)
  }, [reduced, strength])

  useEffect(() => {
    if (reduced) return
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [onScroll, reduced])

  return ref
}

export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

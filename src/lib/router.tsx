import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react'

type RouterValue = {
  path: string
  search: string
  navigate: (to: string) => void
}

const RouterContext = createContext<RouterValue>({
  path: '/',
  search: '',
  navigate: () => {},
})

function read() {
  return { path: window.location.pathname, search: window.location.search }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [loc, setLoc] = useState(read)

  useEffect(() => {
    const onPop = () => setLoc(read())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to: string) => {
    const current = window.location.pathname + window.location.search
    if (to === current) return
    window.history.pushState({}, '', to)
    setLoc(read())
    window.scrollTo(0, 0)
  }, [])

  return (
    <RouterContext.Provider value={{ path: loc.path, search: loc.search, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  return useContext(RouterContext)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
  children: ReactNode
}

export function Link({ to, children, onClick, ...rest }: LinkProps) {
  const { navigate } = useRouter()
  return (
    <a
      href={to}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return
        event.preventDefault()
        onClick?.(event)
        navigate(to)
      }}
      {...rest}
    >
      {children}
    </a>
  )
}

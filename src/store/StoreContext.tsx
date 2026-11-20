import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { getProductById, type Product } from '../data/products'
import { FREE_SHIPPING_THRESHOLD, SHIPPING_COST } from '../lib/commerce'
import { usePersistentState } from '../lib/hooks'

export type CartLine = { id: string; qty: number; color: string }
export type Toast = { id: number; title: string; message?: string }

type StoreValue = {
  cart: CartLine[]
  cartCount: number
  subtotal: number
  shipping: number
  total: number
  addToCart: (product: Product, options?: { qty?: number; color?: string }) => void
  setQty: (id: string, color: string, qty: number) => void
  removeLine: (id: string, color: string) => void
  clearCart: () => void
  wishlist: string[]
  toggleWishlist: (id: string) => boolean
  isWishlisted: (id: string) => boolean
  recent: string[]
  addRecent: (id: string) => void
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  quickViewId: string | null
  setQuickViewId: (id: string | null) => void
  toasts: Toast[]
  notify: (title: string, message?: string) => void
  dismissToast: (id: number) => void
}

const StoreContext = createContext<StoreValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = usePersistentState<CartLine[]>('dreamdecor.cart', [])
  const [wishlist, setWishlist] = usePersistentState<string[]>('dreamdecor.wishlist', [])
  const [recent, setRecent] = usePersistentState<string[]>('dreamdecor.recent', [])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [quickViewId, setQuickViewId] = useState<string | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastId = useRef(0)

  const dismissToast = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const notify = useCallback(
    (title: string, message?: string) => {
      toastId.current += 1
      const id = toastId.current
      setToasts((current) => [...current.slice(-2), { id, title, message }])
      window.setTimeout(() => dismissToast(id), 4200)
    },
    [dismissToast],
  )

  const addToCart = useCallback(
    (product: Product, options: { qty?: number; color?: string } = {}) => {
      const qty = options.qty ?? 1
      const color = options.color ?? product.colors[0].name
      setCart((current) => {
        const existing = current.find((line) => line.id === product.id && line.color === color)
        if (existing) {
          return current.map((line) =>
            line.id === product.id && line.color === color
              ? { ...line, qty: Math.min(99, line.qty + qty) }
              : line,
          )
        }
        return [...current, { id: product.id, qty, color }]
      })
      notify(`${product.name} به سبد خرید اضافه شد.`, color)
    },
    [notify, setCart],
  )

  const setQty = useCallback(
    (id: string, color: string, qty: number) => {
      setCart((current) =>
        qty <= 0
          ? current.filter((line) => !(line.id === id && line.color === color))
          : current.map((line) =>
              line.id === id && line.color === color
                ? { ...line, qty: Math.min(99, qty) }
                : line,
            ),
      )
    },
    [setCart],
  )

  const removeLine = useCallback(
    (id: string, color: string) => {
      setCart((current) =>
        current.filter((line) => !(line.id === id && line.color === color)),
      )
    },
    [setCart],
  )

  const clearCart = useCallback(() => setCart([]), [setCart])

  const toggleWishlist = useCallback(
    (id: string) => {
      const isSaved = wishlist.includes(id)
      setWishlist((current) =>
        isSaved ? current.filter((entry) => entry !== id) : [...current, id],
      )
      const product = getProductById(id)
      if (product) {
        notify(
          isSaved
            ? `${product.name} از علاقه‌مندی‌ها حذف شد.`
            : `${product.name} به علاقه‌مندی‌ها اضافه شد.`,
        )
      }
      return !isSaved
    },
    [notify, setWishlist, wishlist],
  )

  const isWishlisted = useCallback((id: string) => wishlist.includes(id), [wishlist])

  const addRecent = useCallback(
    (id: string) => {
      setRecent((current) => [id, ...current.filter((entry) => entry !== id)].slice(0, 8))
    },
    [setRecent],
  )

  const { cartCount, subtotal, shipping, total } = useMemo(() => {
    const count = cart.reduce((sum, line) => sum + line.qty, 0)
    const sub = cart.reduce((sum, line) => {
      const product = getProductById(line.id)
      return sum + (product ? product.price * line.qty : 0)
    }, 0)
    const ship = sub === 0 || sub >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
    return { cartCount: count, subtotal: sub, shipping: ship, total: sub + ship }
  }, [cart])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const value: StoreValue = {
    cart,
    cartCount,
    subtotal,
    shipping,
    total,
    addToCart,
    setQty,
    removeLine,
    clearCart,
    wishlist,
    toggleWishlist,
    isWishlisted,
    recent,
    addRecent,
    cartOpen,
    setCartOpen,
    searchOpen,
    setSearchOpen,
    menuOpen,
    setMenuOpen,
    quickViewId,
    setQuickViewId,
    toasts,
    notify,
    dismissToast,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const context = useContext(StoreContext)
  if (!context) throw new Error('useStore must be used inside StoreProvider')
  return context
}

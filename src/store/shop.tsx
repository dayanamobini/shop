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
import { productById, type Product } from '../data/catalog'

export type CartLine = {
  key: string
  productId: string
  size: string
  color: string
  qty: number
}

export type Address = {
  id: string
  label: string
  name: string
  line1: string
  city: string
  postal: string
  country: string
  phone: string
}

export type OrderLine = {
  productId: string
  name: string
  size: string
  color: string
  qty: number
  price: number
  image: string
}

export type Order = {
  id: string
  date: string
  total: number
  status: string
  delivery: string
  lines: OrderLine[]
  address: Address | null
}

export type User = { name: string; email: string }

type Toast = { id: number; message: string; tone: 'success' | 'error' }

type Persisted = {
  cart: CartLine[]
  wishlist: string[]
  user: User | null
  orders: Order[]
  addresses: Address[]
  discount: string | null
}

const STORAGE_KEY = 'deva-shop-v1'
const FREE_SHIPPING_THRESHOLD = 99
const STANDARD_SHIPPING = 9

export const DISCOUNT_CODES: Record<string, number> = { DEVA10: 0.1, WELCOME15: 0.15 }

type ShopValue = {
  cart: CartLine[]
  wishlist: string[]
  user: User | null
  orders: Order[]
  addresses: Address[]
  discount: string | null
  toasts: Toast[]
  cartOpen: boolean
  searchOpen: boolean
  quickViewId: string | null
  cartCount: number
  subtotal: number
  discountAmount: number
  shipping: number
  total: number
  addToCart: (productId: string, size: string, color: string, qty?: number) => void
  updateQty: (key: string, qty: number) => void
  removeLine: (key: string) => void
  clearCart: () => void
  toggleWishlist: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  applyDiscount: (code: string) => boolean
  clearDiscount: () => void
  login: (email: string, password: string) => { ok: boolean; error?: string }
  register: (name: string, email: string, password: string) => { ok: boolean; error?: string }
  logout: () => void
  addAddress: (address: Omit<Address, 'id'>) => void
  removeAddress: (id: string) => void
  placeOrder: (delivery: string, address: Address | null) => Order
  pushToast: (message: string, tone?: 'success' | 'error') => void
  openCart: () => void
  closeCart: () => void
  openSearch: () => void
  closeSearch: () => void
  setQuickView: (productId: string | null) => void
}

const ShopContext = createContext<ShopValue | null>(null)

function load(): Partial<Persisted> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Partial<Persisted>
  } catch {
    return {}
  }
}

const emptyPersisted: Persisted = {
  cart: [],
  wishlist: [],
  user: null,
  orders: [],
  addresses: [],
  discount: null,
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const initial = useRef({ ...emptyPersisted, ...load() })
  const [cart, setCart] = useState<CartLine[]>(initial.current.cart)
  const [wishlist, setWishlist] = useState<string[]>(initial.current.wishlist)
  const [user, setUser] = useState<User | null>(initial.current.user)
  const [orders, setOrders] = useState<Order[]>(initial.current.orders)
  const [addresses, setAddresses] = useState<Address[]>(initial.current.addresses)
  const [discount, setDiscount] = useState<string | null>(initial.current.discount)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [quickViewId, setQuickViewId] = useState<string | null>(null)

  useEffect(() => {
    const snapshot: Persisted = { cart, wishlist, user, orders, addresses, discount }
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot))
    } catch {
      /* storage unavailable — the session still works in memory */
    }
  }, [cart, wishlist, user, orders, addresses, discount])

  const pushToast = useCallback((message: string, tone: 'success' | 'error' = 'success') => {
    const id = Date.now() + Math.random()
    setToasts((current) => [...current, { id, message, tone }])
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id))
    }, 3600)
  }, [])

  const addToCart = useCallback(
    (productId: string, size: string, color: string, qty = 1) => {
      const key = `${productId}-${size}-${color}`.toLowerCase()
      setCart((current) => {
        const existing = current.find((line) => line.key === key)
        if (existing) {
          return current.map((line) =>
            line.key === key ? { ...line, qty: Math.min(line.qty + qty, 10) } : line,
          )
        }
        return [...current, { key, productId, size, color, qty }]
      })
      const product = productById(productId)
      pushToast(`${product ? product.name : 'Item'} added to your bag`)
      setCartOpen(true)
    },
    [pushToast],
  )

  const updateQty = useCallback((key: string, qty: number) => {
    setCart((current) =>
      current.flatMap((line) =>
        line.key === key ? (qty < 1 ? [] : [{ ...line, qty: Math.min(qty, 10) }]) : [line],
      ),
    )
  }, [])

  const removeLine = useCallback((key: string) => {
    setCart((current) => current.filter((line) => line.key !== key))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleWishlist = useCallback(
    (productId: string) => {
      setWishlist((current) => {
        const exists = current.includes(productId)
        pushToast(exists ? 'Removed from wishlist' : 'Saved to wishlist')
        return exists ? current.filter((id) => id !== productId) : [...current, productId]
      })
    },
    [pushToast],
  )

  const isWishlisted = useCallback((productId: string) => wishlist.includes(productId), [wishlist])

  const applyDiscount = useCallback(
    (code: string) => {
      const normalized = code.trim().toUpperCase()
      if (!DISCOUNT_CODES[normalized]) {
        pushToast('That code is not valid', 'error')
        return false
      }
      setDiscount(normalized)
      pushToast(`Code ${normalized} applied`)
      return true
    },
    [pushToast],
  )

  const clearDiscount = useCallback(() => setDiscount(null), [])

  const login = useCallback(
    (email: string, password: string) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Enter a valid email address.' }
      if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' }
      const name = email.split('@')[0].replace(/[._-]+/g, ' ')
      setUser({ name: name.replace(/\b\w/g, (c) => c.toUpperCase()), email })
      pushToast('Welcome back')
      return { ok: true }
    },
    [pushToast],
  )

  const register = useCallback(
    (name: string, email: string, password: string) => {
      if (name.trim().length < 2) return { ok: false, error: 'Please enter your name.' }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: 'Enter a valid email address.' }
      if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters.' }
      setUser({ name: name.trim(), email })
      pushToast('Your account is ready')
      return { ok: true }
    },
    [pushToast],
  )

  const logout = useCallback(() => {
    setUser(null)
    pushToast('Signed out')
  }, [pushToast])

  const addAddress = useCallback(
    (address: Omit<Address, 'id'>) => {
      setAddresses((current) => [...current, { ...address, id: `a${Date.now()}` }])
      pushToast('Address saved')
    },
    [pushToast],
  )

  const removeAddress = useCallback((id: string) => {
    setAddresses((current) => current.filter((address) => address.id !== id))
  }, [])

  const cartProducts = useMemo(
    () =>
      cart
        .map((line) => ({ line, product: productById(line.productId) }))
        .filter((entry): entry is { line: CartLine; product: Product } => Boolean(entry.product)),
    [cart],
  )

  const subtotal = cartProducts.reduce((sum, { line, product }) => sum + product.price * line.qty, 0)
  const discountAmount = discount ? subtotal * (DISCOUNT_CODES[discount] ?? 0) : 0
  const shipping =
    subtotal === 0 || subtotal - discountAmount >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING
  const total = subtotal - discountAmount + shipping
  const cartCount = cart.reduce((sum, line) => sum + line.qty, 0)

  const placeOrder = useCallback(
    (delivery: string, address: Address | null) => {
      const lines: OrderLine[] = cartProducts.map(({ line, product }) => ({
        productId: product.id,
        name: product.name,
        size: line.size,
        color: line.color,
        qty: line.qty,
        price: product.price,
        image: product.images[0],
      }))
      const order: Order = {
        id: `DV-${Math.floor(100000 + Math.random() * 899999)}`,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
        total,
        status: 'Processing',
        delivery,
        lines,
        address,
      }
      setOrders((current) => [order, ...current])
      setCart([])
      setDiscount(null)
      return order
    },
    [cartProducts, total],
  )

  const value: ShopValue = {
    cart,
    wishlist,
    user,
    orders,
    addresses,
    discount,
    toasts,
    cartOpen,
    searchOpen,
    quickViewId,
    cartCount,
    subtotal,
    discountAmount,
    shipping,
    total,
    addToCart,
    updateQty,
    removeLine,
    clearCart,
    toggleWishlist,
    isWishlisted,
    applyDiscount,
    clearDiscount,
    login,
    register,
    logout,
    addAddress,
    removeAddress,
    placeOrder,
    pushToast,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    openSearch: () => setSearchOpen(true),
    closeSearch: () => setSearchOpen(false),
    setQuickView: setQuickViewId,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error('useShop must be used inside ShopProvider')
  return context
}

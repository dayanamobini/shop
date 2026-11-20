import { useStore } from '../../store/StoreContext'
import { Icon } from './Icon'

export function Toasts() {
  const { toasts, dismissToast } = useStore()
  if (toasts.length === 0) return null

  return (
    <div className="toasts" role="status" aria-live="polite">
      {toasts.map((toast) => (
        <div className="toast" key={toast.id}>
          <span className="toast__icon">
            <Icon name="check" size={15} />
          </span>
          <div className="toast__text">
            <p className="toast__title">{toast.title}</p>
            {toast.message && <p className="toast__message">{toast.message}</p>}
          </div>
          <button
            type="button"
            className="toast__close"
            onClick={() => dismissToast(toast.id)}
            aria-label="بستن اعلان"
          >
            <Icon name="close" size={14} />
          </button>
        </div>
      ))}
    </div>
  )
}

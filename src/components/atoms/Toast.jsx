export default function Toast({ message, onDismiss = () => {} }) {
  if (!message) return null

  return (
    <div className="toast" role="status" aria-live="polite">
      <span>{message}</span>
      <button className="toast__close" type="button" onClick={onDismiss}>
        Close
      </button>
    </div>
  )
}

export default function ProgressBar({ value }) {
  return (
    <div className="progress">
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${value}%` }} />
      </div>
      <span className="progress__value">{value}%</span>
    </div>
  )
}

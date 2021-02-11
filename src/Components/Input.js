export default function Input(props) {
    const { onChange, value, className,maxLength } = props
    return (
      <input className={className} value={value} onChange={onChange} placeholder="Type something..." maxLength={maxLength}/>
    )
  }
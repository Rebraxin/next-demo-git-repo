const TextInput = (props) => {
  const { label, type, value, onChange, placeholder, className } = props
  const textInputClass = className ? `${className} field` : 'field'

  return (
    <div className={textInputClass}>
      <div className="control">
        <label className="label">{label}</label>
        <input
          className="input is-primary"
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </div>
    </div>
  )
}

export default TextInput

const Select = (props) => {
  const { label, value, onChange, options, className } = props
  const selectClass = className ? `${className} field` : 'field'

  return (
    <div className={selectClass}>
      <div className="control">
        <label className="label">{label}</label>
        <div className="select is-primary">
          <select
            name="languages"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Select

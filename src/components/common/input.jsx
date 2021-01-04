import React from 'react'

export default function Input({
  name,
  label,
  labelClasses,
  inputClasses,
  wrapperClasses,
  error,
  ...rest
}) {
  return (
    <React.Fragment>
      <div className={wrapperClasses}>
        {label && <label
          className={labelClasses}
          htmlFor={name}
        >{label}
        </label>}
        <input
          {...rest}
          name={name}
          className={inputClasses}
          id={name}
        />
        <div style={{ height: '10px', marginTop: '3px' }}>
          {error && <span style={{ color: 'red', fontSize: '1em' }}>{error}</span>}
        </div>
      </div>
    </React.Fragment>
  )
}

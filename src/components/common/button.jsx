import React from 'react'

export default function Button({
  wrapperClasses,
  buttonClasses,
  float,
  children,
  ...rest
}) {
  return (
    <div classes={wrapperClasses}>
      <button
        {...rest}
        className={buttonClasses}
        style={{ float }}
      >
        {children}
      </button>
    </div>
  )
}
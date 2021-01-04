import React from 'react'

export default function Icon({ alt, iconClasses, spanClasses, children, ...rest }) {
  return (
    <React.Fragment>

      <span className={spanClasses}>
        <img
          {...rest}
          alt={alt}
          className={iconClasses}
        />
        {children}
      </span>
    </React.Fragment>
  )
}

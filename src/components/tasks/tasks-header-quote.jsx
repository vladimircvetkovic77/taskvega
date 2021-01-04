import React from 'react'

export default function HeaderQuote({ quote, author }) {
  return (
    <div className="header-blockquote">
      <h1 className="header-quote">
        {quote}
      </h1>
      <div className="header-cite">- {author}</div>
    </div>
  )
}

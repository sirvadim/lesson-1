import React from 'react'

export const IconLoader = props => (
  <svg width={18} height={18} fill="none" className="round-loader">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0h1a9 9 0 1 1-9 9V8h2v1a7 7 0 1 0 7-7H8V0z"
      fill={props.color}
    />
  </svg>
)

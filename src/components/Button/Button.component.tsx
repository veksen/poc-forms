import React from 'react'
import './Button.style.css'

interface IButton {
  onClick: () => void
}

export const Button: React.FC<IButton> = props => {
  return (
    <div className="Button" {...props}>
      {props.children}
    </div>
  )
}

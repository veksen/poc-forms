import React from 'react'
import './Card.style.css'

export interface ICard {
  id: number
  title: string
}

export const Card: React.FC<ICard & { onClick: () => void }> = props => {
  return (
    <div className="Card" onClick={props.onClick}>
      {props.title}
    </div>
  )
}

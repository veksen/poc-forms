import React from 'react'
import './Card.style.css'

export interface ICard {
  title: string
}

export const Card: React.FC<ICard> = props => {
  return <div className="Card">{props.title}</div>
}

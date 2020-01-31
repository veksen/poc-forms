import React from 'react'
import { Card, ICard } from '../Card/Card.component'
import './CardList.style.css'

interface ICardList {
  cards: ICard[]
}

export const CardList: React.FC<ICardList> = props => {
  return (
    <div className="CardList">
      {props.cards.map(card => {
        return <Card key={card.title} title={card.title} />
      })}
    </div>
  )
}

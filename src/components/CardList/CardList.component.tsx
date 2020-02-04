import React from 'react'
import { Card, ICard } from '../Card/Card.component'
import './CardList.style.css'
import { useDispatch } from 'react-redux'

interface ICardList {
  cards: ICard[]
}

export const CardList: React.FC<ICardList> = props => {
  const dispatch = useDispatch()

  function selectCard(id: ICard['id']) {
    const card = props.cards.find(c => c.id === id)

    dispatch({
      type: 'SELECT_DETAIL',
      payload: {
        ...card,
        description: 'lalal',
      },
    })
  }

  return (
    <div className="CardList">
      {props.cards.map(card => {
        return <Card key={card.title} id={card.id} title={card.title} onClick={() => selectCard(card.id)} />
      })}
    </div>
  )
}

import React from 'react'
import './ButtonBar.style.css'
import { Button } from '../Button/Button.component'
import { useDispatch, useSelector } from 'react-redux'
import { IStoreState } from '../../store'

export const ButtonBar: React.FC = () => {
  const dispatch = useDispatch()
  const mode = useSelector((state: IStoreState) => state.detailPanel.mode)

  function toggleEditMode() {
    dispatch({
      type: 'SELECT_MODE',
      payload: 'EDIT',
    })
  }

  function toggleViewMode() {
    dispatch({
      type: 'SELECT_MODE',
      payload: 'VIEW',
    })
  }

  return (
    <div className="ButtonBar">
      {mode === 'EDIT' ? (
        <Button onClick={toggleViewMode}>cancel</Button>
      ) : (
        <Button onClick={toggleEditMode}>edit</Button>
      )}
    </div>
  )
}

import React from 'react'
import { TabbedForm } from '../../components/TabbedForm/TabbedForm.component'
import { useSelector } from 'react-redux'
import { IStoreState } from '../../store'

export const Panel: React.FC = () => {
  const content = useSelector((state: IStoreState) => state.detailPanel.content)

  return (
    <div className="Panel">
      <TabbedForm content={content} />
    </div>
  )
}

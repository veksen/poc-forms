import React from 'react'
import { Tabs } from '../Tabs/Tabs.component'
import { ButtonBar } from '../ButtonBar/ButtonBar.component'
import './TabbedForm.style.css'
import { useSelector, useDispatch } from 'react-redux'
import { IStoreState } from '../../store'
import { ICard } from '../Card/Card.component'
import { IDetailPanelReducer } from '../../redux/reducer/detailPanelReducer'

export interface ITabContent {
  title: string
  content: React.ReactElement
}

interface ITabbedForm {
  content: IDetailPanelReducer['content']
}

export const TabbedForm: React.FC<ITabbedForm> = props => {
  const dispatch = useDispatch()
  const currentTab = useSelector((state: IStoreState) => state.detailPanel.currentTab)

  const setCurrentTab = (index: number) => {
    dispatch({
      type: 'SELECT_TAB',
      payload: index,
    })
  }

  const tabs: ITabContent[] = [
    { title: 'tab1', content: <div>hello from tab1</div> },
    { title: 'tab2', content: <div>hello from tab2</div> },
    { title: 'tab3', content: <div>hello from tab3</div> },
  ]

  return (
    <div className="TabbedForm">
      <ButtonBar />
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="TabbedForm__content">
        <div>{tabs[currentTab].content}</div>
        <div>{props.content ? props.content.title : 'no content selected!'}</div>
      </div>
    </div>
  )
}

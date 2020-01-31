import React from 'react'
import './Tabs.style.css'
import { ITabContent } from '../TabbedForm/TabbedForm.component'

interface ITabs {
  tabs: ITabContent[]
  currentTab: number
  setCurrentTab: (index: number) => void
}

export const Tabs: React.FC<ITabs> = props => {
  return (
    <div className="Tabs">
      {props.tabs.map((tab, i) => {
        return (
          <div
            key={i}
            className={`Tabs__tab ${props.currentTab === i ? 'selected' : ''}`}
            onClick={() => props.setCurrentTab(i)}
          >
            {tab.title}
          </div>
        )
      })}
    </div>
  )
}

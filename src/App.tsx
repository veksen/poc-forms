import React from 'react'
import { Panel } from './modules/Panel/Panel.component'
import { CardList } from './components/CardList/CardList.component'

const App: React.FC = () => {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <CardList
        cards={[
          { id: 1, title: 'card 1' },
          { id: 2, title: 'card 2' },
        ]}
      />
      <Panel />
    </div>
  )
}

export default App

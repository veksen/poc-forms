import React from 'react'
import { TabbedForm } from './components/TabbedForm/TabbedForm.component'
import { CardList } from './components/CardList/CardList.component'

const App: React.FC = () => {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <CardList cards={[{ title: 'card 1' }, { title: 'card 2' }]} />
      <TabbedForm />
    </div>
  )
}

export default App

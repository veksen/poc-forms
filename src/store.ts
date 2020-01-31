import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { IDetailPanelReducer } from './redux/reducer/detailPanelReducer'

export interface IStoreState {
  detailPanel: IDetailPanelReducer
}

export const store = createStore<IStoreState, any, {}, {}>(rootReducer)

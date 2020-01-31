interface IDetail {
  title: string
  description: string
}

interface IAction {
  type: string
  payload: any
}

export interface IDetailPanelReducer {
  mode: 'EDIT' | 'VIEW'
  currentTab: number
  content: IDetail | null
}

export function detailPanel(
  state: IDetailPanelReducer = {
    mode: 'VIEW',
    currentTab: 0,
    content: null,
  },
  action: IAction
) {
  switch (action.type) {
    case 'SELECT_TAB':
      return {
        ...state,
        currentTab: action.payload,
      }
    case 'SELECT_MODE':
      return {
        ...state,
        mode: action.payload,
      }
    case 'SELECT_DETAIL':
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}

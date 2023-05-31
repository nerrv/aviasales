import { CHANGE_TAB } from '../actions/actions'

const initialState = {
  tabs: [
    { id: 1, name: 'cheap', label: 'Самый дешевый', selected: true },
    { id: 2, name: 'fast', label: 'Самый быстрый', selected: false },
    { id: 3, name: 'prime', label: 'Оптимальный', selected: false },
  ],
}

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.id === action.tabId) {
            return {
              ...tab,
              selected: true,
            }
          } else {
            return {
              ...tab,
              selected: false,
            }
          }
        }),
      }
    default:
      return state
  }
}

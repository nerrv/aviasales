import { combineReducers } from 'redux'

import { filterReducer } from './filter-reducer'
import { tabReducer } from './tab-reducer'
import { ticketReducer } from './ticket-reducer'

export const rootReducer = combineReducers({
  filter: filterReducer,
  tab: tabReducer,
  tickets: ticketReducer,
})

import { SET_TICKETS, SET_MORE_TICKETS, SET_SEARCH_ID, SET_ERROR, STOP_LOADING } from '../actions/actions'

const initialState = {
  tickets: [],
  isLoading: true,
  isError: false,
  step: 5,
  id: null,
}

export const ticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: [...action.tickets],
      }
    case SET_MORE_TICKETS:
      return {
        ...state,
        step: state.step + 5,
      }
    case SET_SEARCH_ID:
      return {
        ...state,
        id: action.id,
      }
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      }
    case SET_ERROR:
      return {
        ...state,
        isError: true,
      }
    default:
      return state
  }
}

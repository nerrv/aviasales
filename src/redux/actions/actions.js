import axios from 'axios'

export const CHANGE_FILTER = 'CHANGE_FILTER'
export const CHANGE_TAB = 'CHANGE_TAB'

export const SET_TICKETS = 'SET_TICKETS'
export const SET_MORE_TICKETS = 'SET_MORE_TICKETS'
export const SET_SEARCH_ID = 'SET_SEARCH_ID'
export const STOP_LOADING = 'STOP_LOADING'
export const SET_ERROR = 'SET_ERROR'

export const setTickets = (tickets) => ({ type: SET_TICKETS, tickets })
export const setMoreTickets = () => ({ type: SET_MORE_TICKETS })
export const setSearchId = (id) => ({ type: SET_SEARCH_ID, id })
export const stopLoading = () => ({ type: STOP_LOADING })
export const setError = () => ({ type: SET_ERROR })

export const changeFilter = (filterName) => ({
  type: CHANGE_FILTER,
  filterName,
})

export const changeTab = (tabId) => ({
  type: CHANGE_TAB,
  tabId,
})

export const getSearchId = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('https://aviasales-test-api.kata.academy/search')
      const id = res.data.searchId
      dispatch(setSearchId(id))
    } catch (err) {
      throw new Error(err)
    }
  }
}

const ticketsData = []
export const getTickets = (id) => {
  const url = 'https://aviasales-test-api.kata.academy/'
  return async (dispatch) => {
    try {
      const res = await axios.get(`${url}tickets?searchId=${id}`)
      const { tickets, stop } = await res.data
      ticketsData.push(...tickets)
      if (!stop) {
        dispatch(getTickets(id))
        dispatch(setTickets(ticketsData))
      }
      if (stop) {
        dispatch(stopLoading())
      }
    } catch (err) {
      if (err.code === 'ERR_BAD_RESPONSE') {
        dispatch(getTickets(id))
      } else {
        dispatch(setError())
      }
    }
  }
}

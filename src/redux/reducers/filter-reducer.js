import { CHANGE_FILTER } from '../actions/actions'

const initialState = {
  filters: [
    { id: 1, name: 'all', value: 'all', label: 'Все', checked: true },
    { id: 2, name: 'none', value: 0, label: 'Без пересадок', checked: true },
    { id: 3, name: 'one', value: 1, label: '1 пересадка', checked: true },
    { id: 4, name: 'two', value: 2, label: '2 пересадки', checked: true },
    { id: 5, name: 'three', value: 3, label: '3 пересадки', checked: true },
  ],
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      let newState = JSON.parse(JSON.stringify(state))
      const { filters } = newState
      const value = !filters.find((filter) => filter.name === action.filterName).checked
      if (action.filterName === 'all') {
        filters.map((filter) => (filter.checked = value))
      } else {
        filters.map((filter) => (filter.name === action.filterName ? (filter.checked = value) : filter))
        const filtersLength = filters.length - 1
        const checkedFiltersLength = filters.filter((checkbox) => checkbox.checked === true).length
        if (filtersLength === checkedFiltersLength) {
          filters.map((filter) => (filter.name === 'all' ? (filter.checked = !filter.checked) : filter))
        }
      }
      return newState
    }
    default:
      return state
  }
}

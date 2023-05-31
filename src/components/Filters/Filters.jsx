import { useDispatch, useSelector } from 'react-redux'

import FilterItem from '../FilterItem/FilterItem'
import { changeFilter } from '../../redux/actions/actions'

import classes from './Filters.module.scss'

const Filters = () => {
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filter.filters)

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.name))
  }

  const elements = filters.map((el) => (
    <FilterItem
      key={el.id}
      id={el.id}
      name={el.name}
      label={el.label}
      checked={el.checked}
      onFilterChange={onFilterChange}
    />
  ))

  return (
    <form className={classes['filter']}>
      <h2 className={classes['filter__title']}>Количество пересадок</h2>
      {elements}
    </form>
  )
}

export default Filters

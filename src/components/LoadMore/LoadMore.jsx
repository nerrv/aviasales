import { useDispatch } from 'react-redux'

import { setMoreTickets } from '../../redux/actions/actions'

import classes from './LoadMore.module.scss'

const LoadMore = () => {
  const dispatch = useDispatch()
  return (
    <button className={classes['load-more']} type="button" onClick={() => dispatch(setMoreTickets())}>
      Показать еще 5 билетов!
    </button>
  )
}

export default LoadMore

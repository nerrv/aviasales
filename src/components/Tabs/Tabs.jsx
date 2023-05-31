import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'

import { changeTab } from '../../redux/actions/actions'

import classes from './Tabs.module.scss'

const Tabs = () => {
  const dispatch = useDispatch()
  const tabs = useSelector((state) => state.tab.tabs)
  const elements = tabs.map((el) => (
    <button
      className={cn([classes['button']], { [classes['selected']]: el.selected })}
      type="button"
      key={el.id}
      id={el.id}
      onClick={() => dispatch(changeTab(el.id))}
    >
      {el.label}
    </button>
  ))
  return <div className={classes['tabs']}>{elements}</div>
}

export default Tabs

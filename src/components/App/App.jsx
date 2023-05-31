import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'antd'

import Filters from '../Filters/Filters'
import Tabs from '../Tabs/Tabs'
import CardList from '../CardList/CardList'
import LoadMore from '../LoadMore/LoadMore'
import logo from '../../assets/img/logo.svg'
import { getSearchId, getTickets } from '../../redux/actions/actions'
import Loader from '../Loader/Loader'

import classes from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, id } = useSelector((state) => state.tickets)
  useEffect(() => {
    if (!id) {
      dispatch(getSearchId())
    }
  }, [])

  useEffect(() => {
    if (id) {
      dispatch(getTickets(id))
    }
  }, [id])

  return (
    <div className={classes['container']}>
      <header className={classes['header']}>
        <img className={classes['header__logo']} src={logo} alt="logo" />
      </header>
      <main className={classes['main']}>
        <Filters />
        <section className={classes['content']}>
          <Tabs />
          {isLoading && <Loader />}
          {isError && (
            <Alert
              style={{ padding: '20px', marginBottom: '20px' }}
              message="Something went wrong"
              type="error"
              closable
              showIcon
            />
          )}
          <CardList />
          <LoadMore />
        </section>
      </main>
    </div>
  )
}

export default App

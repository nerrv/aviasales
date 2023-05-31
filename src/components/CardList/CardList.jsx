import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { Alert } from 'antd'

import Card from '../Card/Card'
import { filterTickets, sortTickets } from '../../utils/utils'

import classes from './CardList.module.scss'

const CardList = () => {
  const filters = useSelector((state) => state.filter.filters)
  const tabs = useSelector((state) => state.tab.tabs)
  const { tickets, step } = useSelector((state) => state.tickets)

  const sortedTickets = useMemo(() => filterTickets(sortTickets(tickets, tabs), filters), [tickets, filters, tabs])

  const items = sortedTickets.slice(0, step).map((ticket) => {
    const { carrier, price, segments } = ticket
    const departure = segments[0]
    const arrival = segments[1]
    return (
      <Card
        key={`${departure.date}${departure.duration}${price}${carrier}`}
        carrier={carrier}
        price={price}
        departure={departure}
        arrival={arrival}
      />
    )
  })

  const hasTickets =
    items.length > 0 ? (
      items
    ) : (
      <Alert
        style={{ padding: '20px', marginBottom: '20px' }}
        message="По заданным параметрам билетов нет :("
        type="info"
        showIcon
      />
    )

  return <ul className={classes['card-list']}>{hasTickets}</ul>
}

export default CardList

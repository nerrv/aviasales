import { add, format } from 'date-fns'

import classes from './FlightInfo.module.scss'

const FlightInfo = ({ info }) => {
  const { origin, destination, date, duration, stops } = info

  const countStops = (stops) => {
    const counter = stops.length
    if (counter === 0) {
      return 'Без пересадок'
    }
    if (counter === 1) {
      return '1 пересадка'
    }
    if (counter > 1 && counter < 5) {
      return `${stops.length} пересадки`
    }
  }
  const stopsInfo = stops.join(', ')

  const formatTime = (time) => {
    const hours = Math.trunc(time / 60)
    const minutes = time % 60
    return minutes > 0 ? `${hours}ч ${minutes}м` : `${hours}ч`
  }

  const formatDepartureDate = (date) => {
    return format(new Date(date), 'HH:mm')
  }

  const formatArrivalDate = (date, time) => {
    return format(add(new Date(date), { minutes: time }), 'HH:mm')
  }

  return (
    <div>
      <ul className={classes['flight']}>
        <li>
          <div className={classes['flight__title']}>
            {origin} - {destination}
          </div>
          <div className={classes['flight__info']}>
            {formatDepartureDate(date.slice(0, -1))} - {formatArrivalDate(date.slice(0, -1), duration)}
          </div>
        </li>
        <li>
          <div className={classes['flight__title']}>В пути</div>
          <div className={classes['flight__info']}>{formatTime(duration)}</div>
        </li>
        <li>
          <div className={classes['flight__title']}>{countStops(stops)}</div>
          <div className={classes['flight__info']}>{stopsInfo}</div>
        </li>
      </ul>
    </div>
  )
}

export default FlightInfo

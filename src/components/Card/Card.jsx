import PropTypes from 'prop-types'

import FlightInfo from '../FlightInfo/FlightInfo'

import classes from './Card.module.scss'

const Card = ({ price, carrier, departure, arrival }) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  return (
    <div className={classes['card']}>
      <div className={classes['card__info']}>
        <span className={classes['card__price']}>{`${formattedPrice} Р`}</span>
        <img className={classes['card__logo']} src={`//pics.avs.io/99/36/${carrier}.png`}></img>
      </div>
      <FlightInfo info={departure} />
      <FlightInfo info={arrival} />
    </div>
  )
}

Card.defaultProps = {
  price: 0,
  carrier: 'S7',
  departure: {},
  arrival: {},
}

Card.propTypes = {
  price: PropTypes.number,
  carrier: PropTypes.string,
  departure: PropTypes.object,
  arrival: PropTypes.object,
}

export default Card

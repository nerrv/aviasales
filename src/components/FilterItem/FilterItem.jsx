import PropTypes from 'prop-types'

import classes from './FilterItem.module.scss'

const FilterItem = ({ id, name, checked, label, onFilterChange }) => {
  return (
    <label className={classes['item']} htmlFor={id}>
      <input
        className={classes['input']}
        type="checkbox"
        name={name}
        id={id}
        checked={checked}
        onChange={(e) => {
          onFilterChange(e)
        }}
      />
      <span className={classes['box']}></span>
      <span className={classes['info']}>{label}</span>
    </label>
  )
}

FilterItem.defaultProps = {
  id: 1,
  name: 'all',
  checked: true,
  label: 'Все',
  onFilterChange: () => {},
}

FilterItem.propTypess = {
  id: PropTypes.number,
  name: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
  onFilterChange: PropTypes.func,
}

export default FilterItem

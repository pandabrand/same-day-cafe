import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import MenuOptions from './MenuOptions.js'

const MenuGrid = ({ gridItems }) => {
  return (<>
  {gridItems.map((item) => (
    <Grid key={item.text} item xs={6} container direction="column">
      <Grid item container direction="row" justify="space-between" alignItems="center">
        <Grid item>{item.item}</Grid>
        <Grid item>{item.price}</Grid>
      </Grid>
      <Grid item container direction="column" justify="flex-start">
        <Grid item>{item.text}</Grid>
        {item.options ? 
          <MenuOptions itemTitle={item.item} options={item.options} />
          : ''
        }
      </Grid>
    </Grid>
  ))}
  </>);
}

MenuGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      item: PropTypes.string,
      price: PropTypes.string,
      options: PropTypes.array
    })
  ),
}

export default MenuGrid

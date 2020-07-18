import React from 'react'
import PropTypes from 'prop-types'
import Menus from './Menus'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '4rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const Categories = ({ categories }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <h1 className="title">
          {categories.title}
        </h1>
        <a className="chownow-order-online" href="https://ordering.chownow.com/order/22432/locations">Order Now</a>
        {categories.description ? <h5>{categories.description}</h5> : ''}
        <Grid container spacing={4}>
          <Menus gridItems={categories.items} />
        </Grid>
      </Paper>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf ({
      text: PropTypes.string,
      item: PropTypes.string,
      price: PropTypes.string,
      options: PropTypes.array
    })
  })
}

export default Categories
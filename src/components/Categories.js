import React from 'react'
import PropTypes from 'prop-types'
import Menus from './Menus'

const Categories = ({ categories }) => (
  <div className="columns is-multiline is-desktop">
    <div className="column is-full">
      <h1 className="title">
        {categories.title}
      </h1>
      {categories.description ? <h5>{categories.description}</h5> : ''}
    </div>
    <Menus gridItems={categories.items} />
  </div>
)

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
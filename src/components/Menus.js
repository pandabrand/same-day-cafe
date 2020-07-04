import React from 'react'
import PropTypes from 'prop-types'

const MenuGrid = ({ gridItems }) => (
  <>
  {gridItems.map((item) => (
    <div key={item.text} className="column is-one-third">
      <section className="section">
        <div className="is-flex is-justified-between">
          <p className="has-text-weight-bold">{item.item}</p>
          <p className="has-text-weight-bold">{item.price}</p>
        </div>
        <div>
          <p className="description">{item.text}</p>
          {item.options ? 
            <ul>
              {item.options.map((option) => (
                <li className="is-italic has-text-weight-light" key={option}>{option}</li>
                ))}
            </ul>
            : ''
          }
        </div>
      </section>
    </div>
  ))}
  </>
)

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

import React from 'react'
import PropTypes from 'prop-types'


function Button({color, text, displayTask}) {
  return (
      <button className="btn" style={{backgroundColor: color}} onClick={displayTask}>
        {text}
      </button>
  )
}


Button.defaultProps = {
    color: "steelblue",
}


Button.propTypes = {
    color: PropTypes.string,
    text:  PropTypes.string
}
export default Button
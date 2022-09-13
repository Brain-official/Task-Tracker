import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button"



const Header = (props) => {
  return (
      <div className="header">
          <h1>{props.title}</h1>
          <Button text="Add" />
         
      </div>
  )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.proptype = {
    title: PropTypes.string,
}

export default Header








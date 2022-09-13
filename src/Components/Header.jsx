import React from "react";
import PropTypes from 'prop-types'
import Button from "./Button"



const Header = ({title, displayTask, showAdd}) => {
  return (
    <div className="header">
        <h1>{title}</h1>
        <Button color={showAdd? "red" : "green"} text={showAdd ? "Close" : "Add"} displayTask={ displayTask} />
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








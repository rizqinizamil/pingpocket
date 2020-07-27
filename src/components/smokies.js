import React from "react"
import PropTypes from "prop-types"

import "./smokies.scss"

const Smokies = ({name}) => {
    return(
        <>
            <div className={`smokies ${name}`}></div>
        </>
    )
}

Smokies.propTypes = {
    name: PropTypes.string,
  }
  
Smokies.defaultProps = {
    name: ``,
}

export default Smokies
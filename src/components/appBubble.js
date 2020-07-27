import React from "react"
import PropTypes from "prop-types"

import "./appBubble.scss"

const AppBubble = (props) => {
    return(
        <div className={ !props.hasVideo ? `appBubble ${props.type}` : `appBubble has-video ${props.type}`}>
            <div className="appBubble__img">
                <img src="https://source.unsplash.com/32x32/?face" alt="User"/>
            </div>
            <div className="appBubble__content">
                <div className="appBubble__name">{props.name}</div>
                <div className="appBubble__desc">{props.desc}</div>
                { !props.hasVideo ?
                        <div className="appBubble__indicator">{props.children}</div>
                    : <div className="appBubble__videoBg"><img src={props.hasVideo} alt="Video"/></div>
                }
                
            </div>
        </div>
    )
}

AppBubble.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    hasVideo: PropTypes.string
}
  
AppBubble.defaultProps = {
    type: `done`,
    name: `Drinking`,
    desc: ``,
    hasVideo: ``
}
  
export default AppBubble
import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import "./signupForm.scss"

const SignUpForm =  ({action, labelText, variants}) => {
    return(
        <motion.form action={action} variants={variants} className="signUpForm">
            <label htmlFor="email">
                { labelText && 
                    <span>{labelText}</span>
                }
                <div className="inputWrap">
                    <input type="text" placeholder="Your email address" name="email"/>
                    <input type="submit" value="Submit" className="button"/>
                </div>
            </label>
        </motion.form>
    )
}

SignUpForm.propTypes = {
    action: PropTypes.string,
    labelText: PropTypes.string
}
  
SignUpForm.defaultProps = {
    action: "#"
}
  
export default SignUpForm
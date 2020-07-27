import React from "react"
import { motion } from "framer-motion"

import SignUpForm from "./signupForm"
import Smokies from "./smokies"
import Phone from "./phone"
import "./banner.scss"

const bannerLeft = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.6,0.6,0.36,1.01],
            staggerChildren: 0.8
        }
    }
}

const bannerLeftChildren = {
    hidden: { opacity: 0, y: -16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
}

const Banner = () => (
    <section className="banner">
        <div className="container">
            <motion.div variants={bannerLeft} initial="hidden" animate="visible" className="banner__left">
                <motion.h5 variants={bannerLeftChildren}>Never ending story</motion.h5>
                <motion.h1 variants={bannerLeftChildren}>Everything you need is in the pocket.</motion.h1>
                <SignUpForm variants={bannerLeftChildren} labelText="Sign up now and get free trial for 3 months" />
            </motion.div>
            {/* banner__left */}

            <div className="banner__right">
                <Smokies name="phone-top" />
                <Smokies name="phone-bottom" />
                <Phone />
            </div>
            {/* banner__right */}
        </div>
    </section>
)
  
export default Banner
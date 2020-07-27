import React from "react"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import "./subscribe.scss"
import SignUpForm from "./signupForm"

const Subscribe = () => {
    const wrapper = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.6,0.6,0.36,1.01],
                staggerChildren: 0.4
            }
        }
    }
    
    const item = {
        hidden: { opacity: 0, y: -16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    }
    
    const [ref, inView] = useInView({
        rootMargin: '-80px 0px',
    })

    return(
        <section className="subscribe">
            <div className="container">
                <motion.div ref={ref} variant={wrapper} initial="hidden" animate={ inView && "visible" } className="subscribe__wrapper">
                    <motion.h2 variants={item}>Ready to elevate your dream?</motion.h2>
                    <motion.p variants={item}>Join the community and find everything you need. <br/>Sign up now and get free trial for 3 months.</motion.p>
                    <SignUpForm variants={item} />
                </motion.div>
            </div>
        </section>
    )
}
  
export default Subscribe
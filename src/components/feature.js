import React from "react"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import "./feature.scss"

import imgMan from "../images/Feature/img-man.png"
import imgGirl from "../images/Feature/img-girl.png"
import imgGirlJump from "../images/Feature/img-girl-jump.png"
import iconPicture from "../images/Feature/icon-picture.svg"
import iconIdea from "../images/Feature/icon-idea.svg"
import iconTinder from "../images/Feature/icon-tinder.svg"

const Feature = () => {

    const images = {
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.6,0.6,0.36,1.01],
                staggerChildren: 0.4
            }
        }
    }

    const imageItem = {
        hidden: {
            opacity: 0,
            x: -16
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.6,0.6,0.36,1.01]
            }
        }
    }

    const featureRight = {
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

    const featureRightItem = {
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
        <section className="feature">
            <div className="container">
                <motion.div ref={ref} variants={images} initial="hidden" animate={ inView && "visible" } className="feature__left">
                    <motion.img variants={imageItem} src={imgMan} alt="Man doing sport" className="img-man" />
                    <motion.img variants={imageItem} src={imgGirl} alt="Girl doing sport" className="img-girl" />
                    <motion.img variants={imageItem} src={imgGirlJump} alt="Girl doing jump sport" className="img-girl-jump"/>
                </motion.div>

                <motion.div ref={ref} variants={featureRight} initial="hidden" animate={ inView && "visible" } className="feature__right">
                    <motion.h2 variants={featureRightItem}>Powerful health tracking app help you reach your goal</motion.h2>
                    <ul className="feature__list">
                        <motion.li variants={featureRightItem}>
                            <img src={iconPicture} alt="Gallery"/>
                            <div className="feature__list__content">
                                <h4>Progress Gallery</h4>
                                <p>Automattically create smart progress gallery to keep you motivated.</p>
                            </div>
                        </motion.li>
                        <motion.li variants={featureRightItem}>
                            <img src={iconIdea} alt="Idea"/>
                            <div className="feature__list__content">
                                <h4>Clear Thinking</h4>
                                <p>We not only care about your body health but also your mental health. We provide everyday tips and news to feed your brain</p>
                            </div>
                        </motion.li>
                        <motion.li variants={featureRightItem}>
                            <img src={iconTinder} alt="Tinder"/>
                            <div className="feature__list__content">
                                <h4>Ready for a Date</h4>
                                <p>Find partner with same passion on your network.</p>
                            </div>
                        </motion.li>
                    </ul>
                </motion.div>
            </div>
        </section>
    )
}
  
export default Feature
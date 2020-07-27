import React from "react"
import SwiperCore, { Pagination, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import Gradient from "../images/Testimonial/TestimonialGradient.svg"
import "swiper/swiper-bundle.min.css"
import "./testimonial.scss"

SwiperCore.use([Pagination, A11y]);

const Testimonial = () => {
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
        <section className="testimonial">
            <div className="container">
                <motion.div ref={ref} variants={wrapper} initial="hidden" animate={ inView && "visible" } className="testimonial__wrapper">
                    <motion.h2 variants={item}>Testimonial</motion.h2>
                    <motion.div variants={item} className="testimonial__slider">
                        <Swiper
                            slidesPerView={1}
                            autoHeight={true}
                            pagination={{ clickable: true }}
                            >
                            <SwiperSlide>
                                <h3 className="testimonial__content">
                                    I never found app like this. It keeps me motivated to reach my goal. I have some new friends who have similar passion like me. I feel like I starting new life. 
                                </h3>
                                <div className="testimonial__author">
                                    <img src="https://source.unsplash.com/56x56/?face,man" alt="Bond"/>
                                    <div className="testimonial__author__detail">
                                        <h4>John Bond</h4>
                                        <p>Bussiness Advisor </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className="testimonial__content">
                                    Adding a customer quote only increases your chances of converting your site’s traffic. If you can, add a high-quality image of the customer providing the quote.
                                </h3>
                                <div className="testimonial__author">
                                    <img src="https://source.unsplash.com/56x56/?face,girl" alt="Elena"/>
                                    <div className="testimonial__author__detail">
                                        <h4>Elena Stan</h4>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className="testimonial__content">
                                    Just great! Thank you for making this app.
                                </h3>
                                <div className="testimonial__author">
                                    <img src="https://source.unsplash.com/56x56/?face,man,black" alt="Bobby"/>
                                    <div className="testimonial__author__detail">
                                        <h4>Bobby Dogh</h4>
                                        <p>Lawyer</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </motion.div>
            </div>
            <div className="testimonial__gradient">
                <img src={Gradient} alt="Gradient"/>
            </div>
        </section>
    )
}  
export default Testimonial
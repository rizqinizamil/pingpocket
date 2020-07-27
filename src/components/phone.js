import React from "react"
import { motion } from "framer-motion"

import "./phone.scss"
import AppBubble from "./appBubble"

const Phone = () => {
    const phoneContainer = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: [0.6,0.6,0.36,1.01],
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    }

    const bubble = {
        hidden: {
            opacity: 0,
            y: 16
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.6,0.6,0.36,1.01]
            }
        }
    }

    const progressBar = {
        init: {
            scaleX: 1
        },
        hover: {
            scaleX: [0, 1],
            transition: {
                duration: 1,
                ease: [0.6,0.6,0.36,1.01]
            }
        }
    }

    const chart = {
        init: {
            pathLength: 1
        },
        hover: {
            pathLength: [0, 1],
            transition: {
                duration: 1,
                ease: [0.6,0.6,0.36,1.01]
            }
        }
    }

    const chartGradient = {
        init: {
            opacity: 1
        },
        hover: {
            opacity: [0, 1],
            transition: {
                duration: 1
            }
        }
    }

    return(
        <motion.div 
            className="phone"
            variants={phoneContainer}
            initial="hidden"
            animate="visible"
        >   
            <motion.div variants={bubble} whileHover="hover">
                <AppBubble type="attention" desc="Daily routine. 8 glasses per day">
                    <svg width="160" height="5" viewBox="0 0 160 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="160" height="5" rx="2.5" fill="#F2F2F2"/>
                        <motion.rect 
                            style={{originX: 0}}
                            initial="init"
                            variants={progressBar}
                            width="115.2" 
                            height="5" 
                            rx="2.5" 
                            fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="115" y1="2.14282" x2="4.90453e-07" y2="2.14284" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1FF44E"/>
                            <stop offset="1" stopColor="#F4EC17"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </AppBubble>
            </motion.div>

            <motion.div variants={bubble}>
                <AppBubble type="done" name="Running" desc="Daily routine. 5km." hasVideo="https://source.unsplash.com/256x190/?running" />
            </motion.div>
            
            <motion.div variants={bubble} whileHover="hover">
                <AppBubble type="ongoing" name="Steps">
                    <svg width="166" height="34" viewBox="0 0 166 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <motion.path variants={chart} initial="init" style={{originX: 0}} d="M1 33L13.8665 17.0238C14.8021 15.8622 16.4489 15.5643 17.7321 16.3245L34.5002 26.2586C35.7214 26.982 37.2823 26.7507 38.2412 25.7042L57.0177 5.21289C58.3011 3.81225 60.5467 3.94207 61.6602 5.48128L75.3719 24.4356C76.5047 26.0016 78.801 26.1034 80.068 24.6439L86.6199 17.0964C87.647 15.9132 89.4116 15.7197 90.6707 16.6521L103.071 25.8353C104.337 26.7729 106.113 26.5714 107.137 25.3739L126.961 2.18626C128.005 0.964226 129.828 0.783049 131.093 1.77547L149.273 16.039C150.365 16.8957 151.902 16.8916 152.989 16.029L165 6.5" stroke="url(#paint0_linear)"/>
                        <motion.path variants={chartGradient} initial="init" d="M13.8665 17.0238L1 33H162C163.657 33 165 31.6569 165 30V6.5L152.989 16.029C151.902 16.8916 150.365 16.8957 149.273 16.039L131.093 1.77547C129.828 0.783049 128.005 0.964226 126.961 2.18626L107.137 25.3739C106.113 26.5714 104.337 26.7729 103.071 25.8353L90.6707 16.6521C89.4116 15.7197 87.6469 15.9132 86.6199 17.0964L80.068 24.6439C78.801 26.1034 76.5047 26.0016 75.3719 24.4356L61.6602 5.48128C60.5467 3.94207 58.3011 3.81225 57.0177 5.21289L38.2412 25.7042C37.2823 26.7507 35.7214 26.982 34.5002 26.2586L17.7321 16.3245C16.4489 15.5643 14.8021 15.8622 13.8665 17.0238Z" fill="url(#paint1_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="164.705" y1="14.1426" x2="-4.99999" y2="14.1426" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1FF44E"/>
                        <stop offset="1" stopColor="#F4EC17"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="88.9999" y1="-32" x2="89.4999" y2="33" gradientUnits="userSpaceOnUse">
                        <stop offset="0.208508" stopColor="#1FF44E"/>
                        <stop offset="1" stopColor="#F4EC17" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>

                </AppBubble>
            </motion.div>
        </motion.div>
    )
}

export default Phone
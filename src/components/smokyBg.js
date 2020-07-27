import React from "react"

import "./smokyBg.scss"

const SmokyBG = () => (
    <svg width="871" height="877" viewBox="0 0 871 877" fill="none" xmlns="http://www.w3.org/2000/svg" className="smokyBG">
        <ellipse cx="126" cy="191.639" rx="532.591" ry="621.328" transform="rotate(-73.8415 126 191.639)" fill="url(#paint0_radial)"/>
        <circle cx="160" cy="198" r="271" fill="url(#paint1_radial)"/>
        <ellipse cx="318" cy="12" rx="346" ry="247" fill="url(#paint2_radial)"/>
        <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(211.593 177.888) rotate(-147.495) scale(713.95 596.852)">
                <stop stopColor="#36CFFF"/>
                <stop offset="1" stopColor="#D34AEA" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-111 -29) rotate(43.3462) scale(539.04)">
                <stop stopColor="#C955FF"/>
                <stop offset="1" stopColor="#F52929" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(335 -71) rotate(80.6018) scale(293.946 411.762)">
                <stop stopColor="#FFBB36"/>
                <stop offset="1" stopColor="#874AEA" stopOpacity="0"/>
            </radialGradient>
        </defs>
    </svg>
)
export default SmokyBG
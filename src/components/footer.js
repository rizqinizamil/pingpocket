import React from "react"
import { Link } from "gatsby"

import "./footer.scss"
import Logo from "../images/Logo.svg"
import IconInstagram from "../images/Footer/icon-instagram.svg"
import IconTwitter from "../images/Footer/icon-twitter.svg"
import IconYoutube from "../images/Footer/icon-youtube.svg"

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer__col">
                <img src={Logo} alt="PingPocket"/>
                <h4>PingPocket LLC</h4>
                <p>
                    2316  rue des Érables<br />
                    Ste Anne Des Monts<br />
                    Quebec G4V 1B6
                </p>
                <ul className="footer__social">
                    <li>
                        <a href="https://instagram.com">
                            <img src={IconInstagram} alt="Instagram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">
                            <img src={IconTwitter} alt="Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com">
                            <img src={IconYoutube} alt="Youtube"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h5>Company</h5>
                <ul className="footer__links">
                    <li>
                        <Link to="#">About Us</Link>
                    </li>
                    <li>
                        <Link to="#">Our Mission</Link>
                    </li>
                    <li>
                        <Link to="#">Culture</Link>
                    </li>
                    <li>
                        <Link to="#">Career</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h5>Product</h5>
                <ul className="footer__links">
                    <li>
                        <Link to="#">Ping Health</Link>
                    </li>
                    <li>
                        <Link to="#">Ping Gallery</Link>
                    </li>
                    <li>
                        <Link to="#">Ping Network</Link>
                    </li>
                    <li>
                        <Link to="#">Ping Chat</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h5>Legal</h5>
                <ul className="footer__links">
                    <li>
                        <Link to="#">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link to="#">Terms & Conditions</Link>
                    </li>
                    <li>
                        <Link to="#">Acceptable Products and Use Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__col">
                <h5>COVID-19 Resources</h5>
                <ul className="footer__links">
                    <li>
                        <Link to="#">PingPocket COVID-19 Updates</Link>
                    </li>
                    <li>
                        <Link to="#">Business Continuity Plan</Link>
                    </li>
                    <li>
                        <Link to="#">Inside Logistics Video Series</Link>
                    </li>
                    <li>
                        <Link to="#">Daily Sales Trends By PingPocket</Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
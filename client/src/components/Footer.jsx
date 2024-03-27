import React from "react";
import './style/Footer.css'
import logo from '../pages/style/img/logo-name.svg'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footerLogo">
                <img src={logo} alt="" />
            </div>
            <div className="footerLink">
                <a href="#">Блог</a>
                <a href="#">О нас</a>
                <a href="#">Контакты</a>
            </div>
        </div>
    )
}

export default Footer;
import { useContext } from "react"
import { Context } from ".."
import './Header.css'
import './Button.css'
import { MAIN_ROUTE } from '../utils/consts'
import logo from '../img/logo-name.svg'


export default function NavBar(){
    const {user} = useContext(Context)

    return(
        <div className="navbar">
            <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
            <button className='entry'>Вход</button>
        </div>
    )
}
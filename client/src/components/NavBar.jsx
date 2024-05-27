import { useContext, useEffect, useState } from "react"
import { Context } from "../index"
import { MAIN_ROUTE } from '../utils/consts'
import logo from '../pages/style/img/logo-name.svg'
import './style/NavBar.css'
import {observer} from 'mobx-react-lite'


const NavBar = observer(() => {
    const {user} = useContext(Context)

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user_id') !== null)

    const handleLogout = () =>{
        localStorage.removeItem('user_id')
        setIsLoggedIn(false)
    }

    return(
        <div className="navbar">
                <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
                {isLoggedIn?
                <div>
                    <button className='entry' onClick={handleLogout}>Выйти</button>
                </div>
                :
                <div>
                    <button className='entry' onClick={() => window.location.href = 'http://localhost:3000/login'}>Войти</button>
                </div>}
        </div>
    )
})

export default NavBar;
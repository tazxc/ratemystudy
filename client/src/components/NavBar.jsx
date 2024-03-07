import { useContext } from "react"
import { Context } from "../index"
import { MAIN_ROUTE } from '../utils/consts'
import logo from '../img/logo-name.svg'
import './style/NavBar.css'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return(
        <div className="navbar">
                <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
                {user.isAuth?
                <div>
                    <button className='entry'>Админ панель</button>
                </div>
                :
                <div>
                    <button className='entry' onClick={() => user.setIsAuth(true)}>Войти</button>
                </div>}
        </div>




    //     <div className="navbar">
    //         <div>
    //             <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
    //             {user.isAuth?
    //             <button className='entry'>Вход</button>
    //         </div>
    //         :
    //         <div>
    //             <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
    //             {user.isAuth ?
    //             <button className='entry'>Вход</button>
    //         </div>
    //         }
    //    </div>
    )
})

export default NavBar;
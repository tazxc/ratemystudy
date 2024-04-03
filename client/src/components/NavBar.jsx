import { useContext } from "react"
import { Context } from "../index"
import { MAIN_ROUTE } from '../utils/consts'
import logo from '../pages/style/img/logo-name.svg'
import './style/NavBar.css'
import {observer} from 'mobx-react-lite'


const NavBar = observer(() => {
    const {user} = useContext(Context)

    return(
        <div className="navbar">
                <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
                {/* <a href=""><h2>Школы</h2></a>
                <a href=""><h2>Колледжи</h2></a>
                <a href=""><h2>Университеты</h2></a> */}
                {user.isAuth?
                <div>
                    <button className='entry' formMethod="POST" formAction="http://Server/out.php">Выйти</button>
                </div>
                :
                <div>
                    <button className='entry' onClick={() => user.setIsAuth(true)}>Войти</button>
                </div>}
        </div>
    )
})

export default NavBar;
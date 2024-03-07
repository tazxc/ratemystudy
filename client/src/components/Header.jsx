import logo from '../img/logo-name.svg'
import { MAIN_ROUTE } from '../utils/consts'
import Button from './Button'
import './Header.css'

export default function Header(){
    return(
        <header>
            <a href={MAIN_ROUTE}><img src={logo} alt="RateMyStudy" /></a>
            <Button/>
            
        </header>
    )
}
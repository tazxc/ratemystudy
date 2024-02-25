import logo from '../img/logo-name.svg'
import Button from './Button'
import './Header.css'

export default function Header(){
    return(
        <header>
            <a href="@"><img src={logo} alt="RateMyStudy" /></a>
            <Button/>
            
        </header>
    )
}
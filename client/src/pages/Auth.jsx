import './style/Auth.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import {useLocation} from 'react-router-dom'

const Auth = () =>{

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <div className="registration">
            <h1>{isLogin? 'Авторизация' : 'Регистрация'}</h1>
            {isLogin? <form action="http://Server/login.php" method='POST' className='form_registr'>
                <input type="text" name="email" id="" placeholder='Введите Email'/>
                <input type="password" name="password" id="" placeholder='Введите пароль'/>
                <div className='row'>
                    {isLogin ?
                    <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a>
                    :
                    <a href={LOGIN_ROUTE} className='row_link'>Войти</a>
                    }
                    {isLogin? 
                    <button className='b_registr'>Войти</button>
                    :
                    <button className='b_registr'>Регистрация</button>}
                </div>
                
            </form>
            :
            <form action="http://Server/registration.php" method='POST' className='form_registr'>
                <input type="text" name="email" id="" placeholder='Введите Email'/>
                <input type="password" name="password" id="" placeholder='Введите пароль'/>
                <div className='row'>
                    {isLogin ?
                    <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a>
                    :
                    <a href={LOGIN_ROUTE} className='row_link'>Войти</a>
                    }
                    {isLogin? 
                    <button className='b_registr'>Войти</button>
                    :
                    <button className='b_registr'>Регистрация</button>}
                </div>
            </form>}
                
            
            
        </div>
    )
}

export default Auth;
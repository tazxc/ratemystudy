import './style/Auth.css'
import { REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () =>{
    return (
        <div className="registration">
            <h2>Авторизация</h2>
            <form action="" className='form_registr'>
                <input type="text" name="" id="" placeholder='Введите Email'/>
                <input type="password" name="" id="" placeholder='Введите пароль'/>
                <div className='row'>
                    <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a>
                    <button className='b_registr'>Войти</button>
                </div>
                
            </form>
        </div>
    )
}

export default Auth;
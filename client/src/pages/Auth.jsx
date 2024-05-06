// import './style/Auth.css'
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
// import {useLocation, useNavigate} from 'react-router-dom'

// const Auth = () =>{

//     const history = useNavigate()


//     const location = useLocation()
//     const isLogin = location.pathname === LOGIN_ROUTE
    
//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         const formData = new FormData(e.target);
//         const url = isLogin ? 'http://Server/login.php' : 'http://Server/registration.php'; // Определение URL в зависимости от типа формы (вход/регистрация)

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 // Обработка успешного входа или регистрации
//                 localStorage.setItem('isLoggedIn', 'true'); // Установка флага входа в localStorage
//                 history.push('/'); // Перенаправление на главную страницу
//             } else {
//                 // Обработка ошибок
//                 console.error('Ошибка входа или регистрации');
//             }
//         } catch (error) {
//             // Обработка ошибок сети
//             console.error('Ошибка сети', error);
//         }
//     };

//     return (
//         <div className="registration">
//             <h1>{isLogin? 'Авторизация' : 'Регистрация'}</h1>
//             {isLogin? <form action="http://Server/login.php" method='POST' className='form_registr'>
//                 <input type="text" name="email" id="" placeholder='Введите Email'/>
//                 <input type="password" name="password" id="" placeholder='Введите пароль'/>
//                 <div className='row'>
//                     {isLogin ?
//                     <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a>
//                     :
//                     <a href={LOGIN_ROUTE} className='row_link'>Войти</a>
//                     }
//                     {isLogin? 
//                     <button 
//                         className='b_registr'>Войти</button>
//                     :
//                     <button className='b_registr'>Регистрация</button>}
//                 </div>
                
//             </form>
//             :
//             <form action="http://Server/registration.php" method='POST' className='form_registr'>
//                 <input type="text" name="email" id="" placeholder='Введите Email'/>
//                 <input type="password" name="password" id="" placeholder='Введите пароль'/>
//                 <div className='row'>
//                     {isLogin ?
//                     <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a>
//                     :
//                     <a href={LOGIN_ROUTE} className='row_link'>Войти</a>
//                     }
//                     {isLogin? 
//                     <button className='b_registr'>Войти</button>
//                     :
//                     <button className='b_registr'>Регистрация</button>}
//                 </div>
//             </form>}
                
            
            
//         </div>
//     )
// }

// export default Auth;


import React, { useState } from 'react';
import './style/Auth.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router-dom';

const Auth = () =>{
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const url = isLogin ? 'http://Server/logintest.php' : 'http://Server/registration.php';

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                console.log(response)
                const data = await response.json();
                localStorage.setItem('user_id', data.user_id); // Сохранение идентификатора пользователя в local storage
                window.location.href = 'http://localhost:3000/'; // Перенаправление на главную страницу
            } else {
                console.log(response)
                const data = await response.json(); // Преобразование ответа в JSON
                setError(data.message); // Устанавливаем сообщение об ошибке
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Произошла ошибка при обращении к серверу'); // Устанавливаем сообщение об ошибке
        }
    };

    return (
        <div className="registration">
            <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
            {error && <p className="error-message">{error}</p>} {/* Вывод сообщения об ошибке, если оно есть */}
            <form onSubmit={handleSubmit} className='form_registr'>
                <input type="text" name="email" placeholder='Введите Email'/>
                <input type="password" name="password" placeholder='Введите пароль'/>
                <div className='row'>
                    {isLogin ? <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a> : <a href={LOGIN_ROUTE} className='row_link'>Войти</a>}
                    <button className='b_registr' type="submit">{isLogin ? 'Войти' : 'Регистрация'}</button>
                </div>
            </form>
        </div>
    );
};

export default Auth;


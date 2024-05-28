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

        <div className='container'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1>{isLogin ? 'Войти' : 'Регистрация'}</h1>
            {error && <p className="error-message">{error}</p>} {/* Вывод сообщения об ошибке, если оно есть */}
            <form onSubmit={handleSubmit} className='w-50'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name='password'/>
                </div>
                <div className=''>
                    {isLogin ? <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a> : <a href={LOGIN_ROUTE} className='row_link'>Войти</a>}
                </div>
                <div className='d-flex flex-row-reverse'>
                {isLogin ? <button type="submit" class="btn btn-primary">Войти</button> : <button type="submit" class="btn btn-primary">Создать аккаунт</button>}
                </div>
            </form>
            </div>
        </div>








        // <div className="registration">
        //     <h1>{isLogin ? 'Авторизация' : 'Регистрация'}</h1>
        //     {error && <p className="error-message">{error}</p>} {/* Вывод сообщения об ошибке, если оно есть */}
        //     <form onSubmit={handleSubmit} className='form_registr'>
        //         <input type="text" name="email" placeholder='Введите Email'/>
        //         <input type="password" name="password" placeholder='Введите пароль'/>
        //         <div className='row'>
        //             {isLogin ? <a href={REGISTRATION_ROUTE} className='row_link'>Регистрация</a> : <a href={LOGIN_ROUTE} className='row_link'>Войти</a>}
        //             <button className='b_registr' type="submit">{isLogin ? 'Войти' : 'Регистрация'}</button>
        //         </div>
        //     </form>
        // </div>
    );
};

export default Auth;


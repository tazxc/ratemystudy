import React from 'react'
import Header from './components/Header'



function App() {
  return (
    <div>
      <Header/>
      
      <main>
        <div className='mainbg main_search'>
          <div className='slog'>
            <h1>Ваш сервис для поиска отзывов</h1>
            <form action="">
              <input className='search' type="text" placeholder='Найдите ваш университет'/>
            </form>
          </div>
        </div>
      </main>
    </div>  
  );
}

export default App;

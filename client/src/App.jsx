import React from 'react'
import Header from './components/Header'
import Story from './components/Story'
import {ways} from './data'


function App() {
  return (
    <div>
      <Header/>
      
      <main>
        <div className='mainbg main_search'>
          <div className='slog'>
            <h1 className='slogh1'>Ваш сервис для поиска отзывов</h1>
            <input className='search' type="text" placeholder='Найдите ваш университет'/>
          </div>
        </div>
      </main>
      <Story {...ways[0]}/>
      <Story {...ways[1]}/>
    </div>  
  );
}

export default App;

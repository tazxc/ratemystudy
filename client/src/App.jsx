import React from 'react'
import Header from './components/Header'
import Story from './components/Story'
import Storys from './components/Storys'
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
      <section className='story_main'>
          <Story {...ways[0]}/>
          <Storys {...ways[1]}/>
      </section>
      
    </div>  
  );
}

export default App;

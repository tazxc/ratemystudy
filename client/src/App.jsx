import React from 'react'
import {BrowserRouter} from 'react-router-dom'
// import {ways} from './data'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar'
// import Footer from './components/Footer'



function App() {

  
  
  return (
    <BrowserRouter>
      
      <NavBar/>
      <AppRouter/>
      {/* <Footer/> */}
      
      
      
      
      {/* <div>
        
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
      
      </div> */}
    </BrowserRouter>
    
  );
}

export default App;

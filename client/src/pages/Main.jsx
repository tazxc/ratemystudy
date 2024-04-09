import React from 'react';
import Footer from '../components/Footer'
import {observer} from 'mobx-react-lite'
import SchoolList from '../components/SchoolList';
import Story from '../components/Story';
import Storys from '../components/Storys'
import {ways} from '../data'
import './style/Main.css'
import { useContext, useEffect } from 'react';
import { Context } from '..';
import { fetchSchools } from '../http/schoolAPI';
import SchoolSearch from '../components/SchoolSearch';




const Main = observer(() => {
    const {school} = useContext(Context)
    useEffect(() => {
        fetchSchools().then(data => school.setInstitution(data))
    }, [])


    return(
        <section>
            <div className='search_school'>
                <h2>Найдите свою школу</h2>
                <input 
                    type="text" 
                    placeholder='введите навзвание вашей школы...' 
                    className='input_serchS'
                    
                    />
                {/* <SchoolSearch/> */}
                
            </div>
            
            <div className='story'>
                <Story {...ways[0]}/>
                <Storys {...ways[1]}/>
            </div>
            <SchoolList/>
            <Footer/>
        </section>
    )
})

export default Main;
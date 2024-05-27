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
            <SchoolSearch/>
            
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
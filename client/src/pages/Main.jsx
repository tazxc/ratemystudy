import SchoolList from '../components/SchoolList';
import Story from '../components/Story';
import Storys from '../components/Storys'
import {ways} from '../data'
import './style/Main.css'

const Main = () => {
    return(
        <section>
            <div className='search_school'>
                <h2>Найдите свою школу</h2>
                <input type="text" placeholder='введите навзвание вашей школы...' className='input_serchS'/>
            </div>
            <div className='story'>
                <Story {...ways[0]}/>
                <Storys {...ways[1]}/>
            </div>
            <SchoolList/>
        </section>
    )
}

export default Main;
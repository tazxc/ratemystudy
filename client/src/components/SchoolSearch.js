import React, { useState } from 'react';
import '../pages/style/SchoolSearch.css'
import { useNavigate } from 'react-router-dom';

const SchoolSearch = () => {
  const [query, setQuery] = useState('');
  const [schools, setSchools] = useState([]);

  const handleSearch = async (event) => {
    const userInput = event.target.value;
    setQuery(userInput);

    const response = await fetch(`http://server/searchSchool.php?query=${userInput}`);
    const data = await response.json();
    setSchools(data);
  };

  const history = useNavigate()

  const schoolClick = (schoolId) =>{
    history(`/school/${schoolId}`)
  }


  return (
    <div className='search_school'>
      <input className='input_serchS w-75' type="text" value={query} onChange={handleSearch} placeholder="Поиск школы..." />
      <ul className='text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto w-75'>
        {schools.map((school, index) => (
          <li 
            className='schoolLi' 
            key={index}
            onClick = {() => schoolClick(school.id)}
            >
              {school.fullName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolSearch

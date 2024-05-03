import React, { useState } from 'react';
import '../pages/style/SchoolSearch.css'

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

  return (
    <div className='search_school'>
      <input className='input_serchS' type="text" value={query} onChange={handleSearch} placeholder="Поиск школы..." />
      <ul>
        {schools.map((school, index) => (
          <li className='schoolLi' key={index}>{school.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolSearch

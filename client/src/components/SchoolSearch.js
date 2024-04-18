import React, { useState } from 'react';

const SchoolSearch = () => {
  const [query, setQuery] = useState('');
  const [schools, setSchools] = useState([]);

  const handleSearch = async (event) => {
    const userInput = event.target.value;
    setQuery(userInput);

    // Здесь можно добавить логику для отправки запроса на сервер с помощью fetch или axios

    // Пример запроса на бэкенд
    const response = await fetch(`http://server/searchSchool.php?query=${userInput}`);
    const data = await response.json();
    setSchools(data);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Поиск школы..." />
      <ul>
        {schools.map((school, index) => (
          <li key={index}>{school.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolSearch

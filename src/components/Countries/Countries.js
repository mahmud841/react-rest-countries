import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Hello from China :{countries.length} </h1>
      {
        // countries.map(country => console.log(country))
      }
      {
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  );
};

export default Countries;
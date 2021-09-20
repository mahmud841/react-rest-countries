import React from 'react';
import './Country.css'
const Country = (props) => {
  const {name, capital, flag, population, region,subregion} = props.country;

  console.log(props.country.subregion);
  return (
    <div className="country">
      <h3>This is:{name} </h3>
      <img  src={flag} alt="" />
      <p><small>Region:{region} </small></p>
      <p><small>Sub-Region:{subregion} </small></p>
      <h5>Capital is:{capital} </h5>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
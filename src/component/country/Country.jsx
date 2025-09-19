import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const[visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    } 

    return (
        <div className={`country ${visited && 'visited-country'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;
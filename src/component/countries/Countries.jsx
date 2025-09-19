import React, { use } from 'react';
import Country from '../country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>In the countries {countries.length}</h1>
            <div className='countries'>
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3

                    }></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
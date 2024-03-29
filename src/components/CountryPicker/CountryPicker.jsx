import React from 'react';
import {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange}) =>  {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(()=>{
        const fetchAPI = async() => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    },[]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect default='' onChange= {(e)=>handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i)=>{return <option key={i} value={country}>{country}</option>})}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from  './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/corona.jpeg';

class App extends Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  }

  handleCountryChange = async (country) => {
    const newData = await fetchData(country);
    console.log('country', country);
    console.log('fetchedData', newData);
    this.setState({country: country, data:  newData});
  }

  render() {

    const { data, country } = this.state;

    return (
      <div className= {styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <h2>Corona Tracker</h2>
        <Cards data = {data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/> 
      </div>
    )
  }
}

export default App


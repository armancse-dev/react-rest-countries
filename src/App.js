// import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Person from './components/Person/Person';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Person></Person>
    </div>
  );
}
// <Countries></Countries> 
// function Countries(){
//   const [countries, setCountries] = useState([]);
  
//   useEffect( () => {
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data =>setCountries(data));
//   }, []);

//   return(
//     <div>
//       <h2>Traveling around the world!</h2>
//       <h4>Countries Avaiable: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h2>Name: {props.name} </h2>
//       <p>Capital: {props.capital} </p>
//     </div>
//   )
// }

export default App;

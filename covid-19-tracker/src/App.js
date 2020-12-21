import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

    // STATE [] = dis is how to write a variable in react <<<<<<

    // https://disease.sh/v3/covid-19/countries

    //USEEFFECT= Use to pull data from api. runs a piece of code based on given condition

    useEffect(() => {
      //note when u live [] blank the code inside here will run only once whn d components loads ie if u av data in the countries varaible when there is changes in the data it wil only run once 
      // we need to run a piece of code -> async -> sends a request to server and wait for it and fo somtin wit d info. how to use is below 

      const getCountriesData= async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then ((data) => {
          const countries = data.map ((country) => (
            {
              name: country.country, //Unites States, United Kingdom
              value: country.countryInfo.iso2 // UK, USA, FRA
          }));

          setCountries(countries);

        });
      };

      getCountriesData();
    }, []);
        

  return (
    <div className="app">
      <div className="app_header">
      <h1> COVID-19 TRACKER</h1>
        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">

            {/*Loop through all the countries and how a drop downlist of the options */}

                {countries.map((country ) => (
                  <MenuItem value={country.value}>{country.name}</MenuItem>
                ))}


            {/*<MenuItem value="worldwide">worldwide</MenuItem>
            <MenuItem value="worldwide">option1</MenuItem>
            <MenuItem value="worldwide">option2</MenuItem>
            <MenuItem value="worldwide">option3</MenuItem>*/}

          </Select>

        </FormControl>

      </div>
      

      {/*Header */}
      {/*title + select input dropdown field */}

      {/*Info box1 */}
      {/*Info box2 */}
      {/*Info box3 */}

      {/*table */}
      {/*Graph */}

      {/*Map */}
      
    </div>
  );
}

export default App;

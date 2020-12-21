import React, { Component } from "react";
import axios from "axios";
import DropDown from "./components/DropDown";
import Countries from "./components/Cards";
import './App.css';

import SearchIcon from '@material-ui/icons/Search';



class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      totalCountries: [],
    }
  }
  componentDidMount(){
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        this.setState(() => ({
          totalCountries: res.data
        }));
      })
      .catch(error => {
        console.log(error);
      });
  }

  render(){
    return (
      <>
        <div className="searchSection">
          <div  className="searchBar">
            <SearchIcon /><input className="searchInput" type="text" placeholder="Search for a country." />
          </div>
          <DropDown />
        </div>
        <Countries totalCountries={this.state.totalCountries}/>
      </>
    );
  }
  
}

export default App;
import './App.css';
import React, { Component } from 'react';
import SearchBox from "../COMP/Searchbox";
import Citytemp from "../COMP/citytemp";
import Infobox from "../COMP/infobox";



class App extends Component {
  constructor() {
    super();
    this.state = {
      w: [],
      location:''
    }
  }

  onchange = (event) => {
    this.setState({ location: event.target.value },() => {
      console.log(this.state.location);
    })
    
  }



  
  
  
  onsl = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&appid=1bfcf5e99382f02e60ef6d436939525c&units=metric&lang=ar`)
        .then(reponse => reponse.json())
        .then(w => { this.setState({ w: w }, () => { console.log(this.state.w); });  });
    }
  }
  


  render(){
    return (
    <div>
      <SearchBox onk={this.onsl} onc={this.onchange.bind(this)} />
        <Citytemp w={this.state.w} />
        {this.state.w.name != undefined && <Infobox w={this.state.w} />}
   </div>
    );
   };
  
}

export default App;

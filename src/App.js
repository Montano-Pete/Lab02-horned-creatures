import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import data from './data.js';
import Dropdown from './Dropdown.js';

export default class App extends Component {
  
  state = {
    filterKeyword: '',
    filterHorns: ''
  }

  dataKeyword = (e) => {
    this.setState({ filterKeyword: e.target.value })
  }
  dataHorns = (e)=> {
    this.setState({ filterHorns: e.target.value })
  }

  render() {
    
    let filteredData = data;

    if (this.state.filterKeyword) {
      filteredData = filteredData.filter(item => item.keyword === this.state.filterKeyword)
    }
    if (this.state.filterHorns) {
      filteredData = filteredData.filter(item => item.horns === +(this.state.filterHorns))
    }

    const keywordOptions = Array.from(new Set(data.map(item => item.keyword)));
    const hornsOptions = Array.from(new Set(data.map(item => item.horns)));

    return (
      <div className="App">
        <Header />
        <Dropdown
            options={keywordOptions}
            handleChange={this.dataKeyword}
          />
          <Dropdown
              options={hornsOptions}
              handleChange={this.dataHorns}
          />
        <ImageList data={filteredData} />
      </div>
    )
  }
}
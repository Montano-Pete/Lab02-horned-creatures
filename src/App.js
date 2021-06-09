import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import data from './data.js';
import FilterKeyword from './FilterKeyword.js';
import FilterHorns from './FilterHorns.js';

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

    return (
      <div className="App">
        <Header />
        <FilterKeyword dataKeyword={this.dataKeyword} />
        <FilterHorns dataHorns={this.dataHorns} />
        <ImageList data={filteredData} />
      </div>
    )
  }
}
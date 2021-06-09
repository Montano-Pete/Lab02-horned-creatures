import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import data from './data.js';

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
      filteredData = data.filter(item => item.keyword === this.state.filterKeyword)
    }
    if (this.state.filterHorns) {
      filteredData = data.filter(item => item.horns === +(this.state.filterHorns))
    }

    return (
      <div className="App">
        <Header />
        <label> Sort by number of horns!
        <select onChange={this.dataHorns}>
          <option value="">View All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </label>
        <label> Sort by creature type!
        <select onChange={this.dataKeyword}>
          <option value="">View All</option>
          <option value="narwhal">Narwhal</option>
          <option value="rhino">Rhino</option>
          <option value="unicorn">Unicorn</option>
          <option value="unilego">Unilego</option>
          <option value="triceratops">Triceratops</option>
          <option value="markhor">Markhor</option>
          <option value="mouflon">Mouflon</option>
          <option value="addax">Addax</option>
          <option value="chameleon">Chameleon</option>
          <option value="lizard">Lizard</option>
          <option value="dragon">Dragon</option>
        </select>
        </label>
        <ImageList data={filteredData} />
      </div>
    )
  }
}



// export default class App extends Component {
//     render() {
//         return (
//     <div className="App">
//       <Header />
//       <ImageList data={images} />
//     </div>
//   ) 
// }
// }

// // export default App;


import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/card-list/search-box/search-box.component';
class App extends Component {
  constructor() {

    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      ;
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder='Search a monster...'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;

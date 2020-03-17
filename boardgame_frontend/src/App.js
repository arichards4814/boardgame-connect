import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import Navigation from './Navigation';
import Search from './Search';
import fetchCatan from './requests'
import GameCard from './GameCard'

class App extends React.Component {

  state = {
    search: "",
    games: []
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleSubmit = (e) => {
    fetchCatan(this.state.search).then(resp => resp.json())
    .then(body => this.setState({games: body.games}))
  }

  renderGames = () => {
    console.dir(this.state.games)
    return this.state.games.map(game => <GameCard key={game.id} {...game} />)
  }

render(){
  return (
    <div>
      <img src={"./images/logo1.png"} className="main-logo"/>
      <Navigation />
      <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <Button> Hello World </Button>
      {this.renderGames()}
    </div>
  );}
}

export default App;

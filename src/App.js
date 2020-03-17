import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Pinger from './components/Pinger'

class App extends React.Component {
  state = {
    sites: ["https://matchy-match-backend.herokuapp.com/players", "https://project-moonlight-backend.herokuapp.com/users"]
  }

  render() {
    return (
      <div>
        <h1>Insomniac</h1>
        { this.state.sites.map((site, i) => <Pinger key={i} url={site} />) }
      </div>
    );
  }
}

export default App;

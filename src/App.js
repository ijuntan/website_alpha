import React, { Component } from 'react';
import StaticHeader from './Components/StaticHeader';
import Navigation from './Navigation';
class App extends Component {

  render() {
    return (
      <div>
        <StaticHeader/>
        <main>
          <Navigation/>
        </main>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import Header from './includes/Header.js';
import Home from './components/Home.js';

class App extends Component {
    render() {
        return (
          <div className="App">
              <Header />
              <Home />
          </div>
        );
    }
}

export default App;

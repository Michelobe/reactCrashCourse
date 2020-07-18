import React, {Component} from 'react';
import Header from './includes/Header.js';
import Home from './components/Home.js';



class App extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData from componentWillMount
        };
    }
    
    componentWillMount() {
        //=================== DATA ========================
        var categoriesData = require('./data/categories.js');

        this.setState({
            categoriesData
        });
    }

    render() {
        return (
          <div className="App">
              <Header />
              <Home categoriesData = {this.state.categoriesData} />
          </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './includes/Header.js';
import Home from './components/Home.js';
import Listings from './components/Listings.js';
import Details from './components/ItemDetails.js';



class App extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData from componentWillMount
        };
    }
    
    UNSAFE_componentWillMount() {
        //=================== DATA ========================
        var categoriesData = require('./data/categories.js');
        var listingsData = require('./data/item.js');

        this.setState({
            categoriesData,
            listingsData
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                        <Route exact path = '/'>
                            <Home categoriesData = {this.state.categoriesData} />
                        </Route>
                        <Route exact path = '/:for-sale'>
                            <Listings listingsData = {this.state.listingsData} />
                        </Route>
                        <Route exact path = '/:for-sale/:cars-and-trucks/:item-details'>
                            <Details />
                        </Route>
                </div>
            </Router>
        );
    }
}

export default App;

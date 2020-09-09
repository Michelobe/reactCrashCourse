import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import Axios from 'axios';
import Header from './includes/Header.js';
import FooterCopyright from './includes/footerCopyright.js';
import Home from './components/Home.js';
import Listings from './components/Listings.js';
import Details from './components/ItemDetails.js';



class App extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData from componentWillMount
            //listingsData from componentWillMount
            // isMobile: window innerWidth
            mobile: 850
        };
    }
    
    UNSAFE_componentWillMount() {
        //=================== DATA ========================
        var categoriesData = require('./data/categories.js');
        var listingsData = require('./data/item.js');

        this.setState({
            categoriesData,
            listingsData,
            isMobile: window.innerWidth
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                        {/* ====================HACKY FIX, NEED TO REVISIT===================== */}
                        {this.state.isMobile < this.state.mobile ? <Header /> : ""}
                        {/* ====================HACKY FIX, NEED TO REVISIT===================== */}
                        <Route exact path = '/'>
                            <Home categoriesData = {this.state.categoriesData} />
                        </Route>
                        <Route exact path = '/:for-sale'>
                            <Listings listingsData = {this.state.listingsData} />
                        </Route>
                        <Route exact path = '/:for-sale/:item-details'>
                            <Details />
                        </Route>
                        <FooterCopyright />
                </div>
            </Router>
        );
    }
}

export default App;

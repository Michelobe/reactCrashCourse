import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import Axios from 'axios';
import Header from './includes/Header.js';
import Home from './components/Home.js';
import Listings from './components/Listings.js';
import Details from './components/ItemDetails.js';



class App extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData from componentWillMount
            //listingsData from componentWillMount
        };
    }
    
    UNSAFE_componentWillMount() {
        //=================== DATA ========================
        var categoriesData = require('./data/categories.js');
        var listingsData = require('./data/item.js');
        
        // ======================================REQUIRE================================================
        // var Consolio = fetch('https://upbeat-galileo-9a1978.netlify.app/testJson.json', {
        //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'include', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json'
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     }
        // });
        // console.log(Consolio);
        // ========================================AXIOS ASYNC?======================================================
        // (async () => {
        //     try{
        //         const response = await Axios.get('https://upbeat-galileo-9a1978.netlify.app/testJson.json');
        //         console.log(response.data.url);
        //         console.log(response.data.explanation);
        //     }catch(error){
        //         console.log(error);
        //     }
        // })();
        // =========================================FETCH=========================================================
        // fetch( "https://upbeat-galileo-9a1978.netlify.app/testJson.json", {
        //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'no-cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     }
        //   })
        // .then( response => response.json() )
        // .then( json => console.log( json ) );
        // =====================================================================================================

        this.setState({
            categoriesData,
            listingsData
        });
    }

    render() {
        return (
            <Router>
                <div className="App">
                        <Route exact path = '/'>
                            <Header />
                            <Home categoriesData = {this.state.categoriesData} />
                        </Route>
                        <Route exact path = '/:for-sale'>
                            <Header />
                            <Listings listingsData = {this.state.listingsData} />
                        </Route>
                        <Route exact path = '/:for-sale/:item-details'>
                            <Header />
                            <Details />
                        </Route>
                </div>
            </Router>
        );
    }
}

export default App;

import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData
		};
    }
    

	render() {
		return (
			<div className="container">
				<header>
                    <Link to ={`/`} className = {'homeLink'}>
                        <h1>CityShop</h1>
                    </Link>
					<form id="headerSearch">
						<input type="search" placeholder="Search" />
						<i className="fas fa-search"></i>
					</form>
					<button type="submit">Post An Ad</button>
				</header>
			</div>
		);
	}
}

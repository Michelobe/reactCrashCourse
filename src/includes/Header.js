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
			<div>
				<div className={`topHead`}>
					<div className={`container`}>
						<div className={`langLocContainer`}>
							<div className={`languageSelect`}>
								<h6>Language:</h6>
								<h5>English</h5>
								<i className="fas fa-chevron-down"></i>
							</div>
							<div className={`locationSelect`}>
								<h6>Location:</h6>
								<h5>Orange</h5>
								<i className="fas fa-chevron-down"></i>
							</div>
						</div>
						<div className={`accountSelect`}>
							<i className="fas fa-user"></i>
							<h6>Account</h6>
							<i className="fas fa-chevron-down"></i>
						</div>
					</div>
				</div>
				<div className={`container`}>
					<div className={`bottomHead`}>
						<Link to ={`/`} className = {'homeLink'}>
							<h1 className={`logo`}><span className={`logoLetter`}>C</span>ityShop</h1>
						</Link>
						<form id="headerSearch">
							<input type="search" placeholder="Search" />
							<i className="fas fa-search"></i>
						</form>
						<button type="submit" className={`postBtn`}>Post An Ad</button>
					</div>
				</div>
			</div>
		);
	}
}

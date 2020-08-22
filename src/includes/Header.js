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
					<div className={'leftMenu'}>
						<div className={'cityDropdown'}>
                            Portland
							<i className={`fas fa-chevron-down`}></i>
						</div>
					</div>
					<div className={'rightMenu'}>
						<div className={'userImg'}>
							<i className="fas fa-user"></i>
						</div>
						<div className={'userDropdown'}>
							My Account<i className={'fas fa-chevron-down'}></i>
						</div>
						{/* <div className={'postBtn'}>Post to Indexed</div> */}
					</div>
				</header>
			</div>
		);
	}
}

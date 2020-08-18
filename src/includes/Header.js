import React, { Component } from 'react';

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
					<div className={'leftMenu'}>
						<h1>CityCenter</h1>
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

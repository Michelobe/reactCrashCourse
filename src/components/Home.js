import React, { Component } from 'react';
import CenterColumn from './homeComponents/CenterColumn.js';


export default class CenterCol extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData set by componentWillMount
		};
    }


    
    UNSAFE_componentWillMount() {
        this.setState({
            categoriesData: this.props.categoriesData
        });
    }

	render() {
		return (
			<div className={`home`}>
				<div className={`container`}>
                    <CenterColumn categoriesData = {this.props.categoriesData} />
				</div>
			</div>
		);
	}
}

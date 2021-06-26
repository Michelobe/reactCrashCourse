import React, { Component } from 'react';
import CenterColumn from './homeComponents/CenterColumn.js';


export default class CenterCol extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData set by componentWillMount,
            nearbyBool: false
		};
    }


    
    UNSAFE_componentWillMount() {
        this.setState({
            categoriesData: this.props.categoriesData
        });
    }

    toggleNearby = () => {
        let nearbyBool = this.state.nearbyBool;

        if(nearbyBool === true || nearbyBool === false){
            this.setState({
                nearbyBool: !nearbyBool
            })
        }
    }

	render() {
		return (
			<div className={'home'}>
				<div className="container">
                    <CenterColumn categoriesData = {this.props.categoriesData} />
				</div>
			</div>
		);
	}
}

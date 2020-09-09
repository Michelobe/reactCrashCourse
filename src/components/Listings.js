import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
            //listingsData from componentWillMount
            minPrice: 0,
            maxPrice: 50000,
            keyItem: '',
            mobileMenuActive: false
        };
    }
    
    UNSAFE_componentWillMount(){
        this.setState({
            listingsData: this.props.listingsData
        },() => {
            console.log(this.state);
        });
    }

    minPrice = () => {
        var value = document.getElementById('minPrice').value

        this.setState({
            minPrice: value
        });

    }
    maxPrice = () => {
        var value = document.getElementById('maxPrice').value

        this.setState({
            maxPrice: value
        });

    }
    keyItem = (i) => {
        this.setState({
            keyItem: this.state.listingsData[i]
        })
    }
	loopItems = () => {
		return this.state.listingsData.map((item, i) => {
            if(item.price >= this.state.minPrice && item.price <= this.state.maxPrice){
                return (
                    <Link to={`/for-sale/item-details`} key={i} className={'item'} onClick = {this.keyItem}>
                        <div className={'image'}
                             style = {{'backgroundImage': `url(${item.images[0]})`}}>
                            <div className={'price'}>${item.price}</div>
                        </div>
                        <div className={'details'}>
                            <h5>{item.title}</h5>
                            <h6>{item.city}</h6>
                        </div>
                    </Link>
                );
            }
// =============ELSE STATEMENT ONLY CREATED TO RID WARNING IN BROWSER===========WARNING=========
            else{
                return(
                    <Link to={`/for-sale/item-details`} key={i} className={'item'} onClick = {this.keyItem}>
                        <div className={'image'}
                             style = {{'backgroundImage': `url(${item.images[0]})`}}>
                            <div className={'price'}>${item.price}</div>
                        </div>
                        <div className={'details'}>
                            <h5>{item.title}</h5>
                            <h6>{item.city}</h6>
                        </div>
                    </Link>
                )
            }  
// =============ELSE STATEMENT ONLY CREATED TO RID WARNING IN BROWSER==========WARNING==========
		});
	};

    // =============================TOGGLE SEEMORE CLASS===============================
    mobileMenuToggle = () => {
        let mobileMenuActive = this.state.mobileMenuActive;

        if(mobileMenuActive === true || mobileMenuActive === false){
            this.setState({
                mobileMenuActive: !mobileMenuActive
            }, () => {
                console.log(this.state.mobileMenuActive);
            });
        }
    }

	render() {
		return (
            <div className="container">
                <div className={'listingsPage'}>
					{/* ===================================FILTER OPTIONS====================================== */}
                    <section id={`filter`}
                             className = {`${this.state.mobileMenuActive ? 'active' : ''}`}>
						{/* ==============DROPDOWN PRICE==================== */}
                        <h1>{this.state.listingsData[0].listing}</h1>
						<div className={'formGroup price'}>
							<label>Price</label>
							<div className={'minMax'}>
								<select id={'minPrice'} className={'minPrice'} onClick = {this.minPrice}>
									<option value="0">MIN</option>
									<option value="1000">$1,000</option>
									<option value="5000">$5,000</option>
									<option value="10000">$10,000</option>
									<option value="20000">$20,000</option>
									<option value="50000">$50,000</option>
								</select>
								<select id={'maxPrice'} className={'maxPrice'} onClick = {this.maxPrice}>
									<option value="50000">MAX</option>
									<option value="5000">$5,000</option>
									<option value="10000">$10,000</option>
									<option value="20000">$20,000</option>
									<option value="50000">$50,000</option>
								</select>
							</div>
						</div>

						{/* ==============DROPDOWN MAKE==================== */}
						<div className={'formGroup make'}>
							<label>Make</label>
							<select name={'make'} className={'make'}>
								<option value="bmw">BMW</option>
							</select>
						</div>

						{/* ==============DROPDOWN MODEL==================== */}
						<div className={'formGroup model'}>
							<label>Model</label>
							<select name={'model'} className={'model'}>
								<option value="335xi">335xi</option>
							</select>
						</div>

						{/* ======================BUTTON==================== */}
						<div className={'formGroup button'}>
							<div className="primaryBtn">Update</div>
							<div className="resetBtn">Reset</div>
						</div>
					</section>
					{/* ===================================FILTER OPTIONS====================================== */}


                    {/* =====================================LIST VIEW==================================== */}
                    <section id={'listView'}>
                        <div className="container">
                            <div className={'whiteBox'}>
                                <section className={'changeView'}>
                                    <i className="fas fa-cog"
                                        onClick = {this.mobileMenuToggle.bind(null)}></i>
                                    {/* ==============DROPDOWN VIEWDROPDOWN========== */}
                                    <div className={'formGroup viewDropdown'}>
                                        <select name={'selectView'} className={'selectView'}>
                                            <option value="gallery">Gallery View</option>
                                            <option value="list">List View</option>
                                            <option value="thumb">Thumb View</option>
                                        </select>
                                    </div>

                                    {/* ===================NEWEST==================== */}
                                    <div className={'formGroup sortDropdown'}>
                                        <select name={'sortDropdown'} className={'sortDropdown'}>
                                            <option value="newest">Newest</option>
                                        </select>
                                    </div>
                                </section>
                                <section className={'allItems'}>{this.loopItems()}</section>
                            </div>
                        </div>
                    </section>
                    {/* =====================================LIST VIEW==================================== */}
				</div>
			</div>
		);
	}
}

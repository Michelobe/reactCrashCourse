import React, { Component } from 'react';

export default class Listings extends Component {
	constructor() {
		super();
		this.state = {
            //listingsData from componentWillMount
            minPrice: 0,
            maxPrice: 50000,
            keyItem: ''
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
                    <div key={i} className={'item'} onClick = {this.keyItem}>
                        <div className={'image'}
                             style = {{'backgroundImage': `url(${item.images[0]})`}}>
                            <div className={'price'}>${item.price}</div>
                        </div>
                        <div className={'details'}>
                            <h5>{item.title}</h5>
                            <i className="fas fa-star"></i>
                            <h6>{item.city}</h6>
                        </div>
                    </div>
                );
            }
// =============ELSE STATEMENT ONLY CREATED TO RID WARNING IN BROWSER===========WARNING=========
            else{
                return(
                    <div key={i} className={'item'} onClick = {this.keyItem}>
                        <div className={'image'}
                             style = {{'backgroundImage': `url(${item.images[0]})`}}>
                            <div className={'price'}>${item.price}</div>
                        </div>
                        <div className={'details'}>
                            <h5>{item.title}</h5>
                            <i className="fas fa-star"></i>
                            <h6>{item.city}</h6>
                        </div>
                    </div>
                )
            }  
// =============ELSE STATEMENT ONLY CREATED TO RID WARNING IN BROWSER==========WARNING==========
		});
	};

	render() {
		return (
			<div className={'listingsPage'}>
				<div className="container">
					{/* ===================================FILTER OPTIONS====================================== */}
					<section id={'filter'}>
						{/* ==============DROPDOWN PRICE==================== */}
						<div className={'formGroup price'}>
							<label>Price</label>
							<div className={'minMax'}>
								<select id={'minPrice'} className={'minPrice'} onClick = {this.minPrice}>
									<option value="0">0</option>
									<option value="1000">$1,000</option>
									<option value="5000">$5,000</option>
									<option value="10000">$10,000</option>
									<option value="20000">$20,000</option>
									<option value="50000">$50,000</option>
								</select>
								<select id={'maxPrice'} className={'maxPrice'} onClick = {this.maxPrice}>
									<option value="50000">$50,000</option>
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
				</div>

				{/* =====================================FILTER RESULTS==================================== */}
				<section id={'listView'}>
					<div className="container">
						<div className={'whiteBox'}>
							<section className={'changeView'}>
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
			</div>
		);
	}
}
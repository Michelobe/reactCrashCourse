import React, { Component } from 'react';
import Gallery from './detailsComponents/Gallery.js';
import SubMenu from './detailsComponents/SubMenu.js';

export default class Details extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div className={'detailsPage'}>
				<div className={'container'}>
					<div className={'whiteBox'}>
						{/* =======================SUBMENU=========================== */}
                        <SubMenu />
						{/* =======================SUBMENU=========================== */}

						{/* ===============================CONTENTAREA================================== */}
						<section className={'contentArea'}>
							<div className={'mediaColumn'}>
                                <h1>2008 Acura RDX Turbo AWD - $9,000</h1>
                                <Gallery />
								<div className={'description'}>
									<p>
										Low mileage and in excellent condition! This "Nighthawk
										Black Pearl" 2007 Acura RDX SH-AWD has the Technology
										Package! All-Wheel-Drive and very safe! It comes with the
										Automatic Transmission, Turbocharged 2.3-Liter DOHC i-VTEC
										Engine, Alloy Wheels, Backup Camera, Climate Control, Heated
									</p>
									<p>
										Leather Seats, GPS Navigation System, Tow Hitch, Power
										Equipment Group, Cruise Control, Power Sunroof, Acura/ELS
										Surround Premium AM/FM/XM Sound System, Keyless Entry,
										Privacy Glass & more! The odometer is 23k miles below market
									</p>
									<p>
										ass & more! The odometer is 23k miles below market average!
										We serviced & detailed this one, too: new front door
										speakers, new wipers & more! You won't find many at this
										price that are this nice! Don't hesitate...this won't last
										long!
									</p>
								</div>
							</div>
							<div className={'detailsColumn'}>
								<div className={'moreDetails'}>
									<div className={'info'}>
								        <h5>Black 2008 Acura Rdx</h5>
									</div>
									<div className={'info'}>
										<label>vin:</label>
										<h5>WBAKA8C55BC446879</h5>
									</div>
									<div className={'info'}>
										<label>mileage:</label>
										<h5>107,000</h5>
									</div>
									<div className={'info'}>
										<label>transmission:</label>
										<h5>Auto</h5>
									</div>
									<div className={'info'}>
										<label>fuel:</label>
										<h5>93 octane</h5>
									</div>
									<div className={'info'}>
										<label>drive train:</label>
										<h5>AWD</h5>
									</div>
									<div className={'info'}>
										<label>exterior color:</label>
										<h5>Black</h5>
									</div>
								</div>
							</div>
						</section>
						{/* ===============================CONTENTAREA================================== */}
					</div>
				</div>
			</div>
		);
	}
}

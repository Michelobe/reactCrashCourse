import React, { Component } from 'react';

export default class Gallery extends Component {
	constructor() {
		super();
		this.state = {
			allImages: [''],
			currentImage: '',
			currentIndex: 0
		};
	}

	// ===========LOADS ALL THUMBNAIL IMAGES AND CURRENT IMAGE==============
	UNSAFE_componentWillMount() {
		const allImages = [
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-limited-fwd-angular-front-exterior-view_100764526_l.jpg',
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-latitude-plus-4x4-angular-rear-exterior-view_100765869_l.jpg',
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-latitude-plus-4x4-angular-rear-exterior-view_100765869_l.jpg',
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-latitude-plus-4x4-rear-exterior-view_100765876_l.jpg',
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-limited-fwd-trunk_100764527_l.jpg',
            'https://images.hgmsites.net/lrg/2021-jeep-cherokee-trailhawk-4x4-dashboard_100764475_l.jpg'
		];
		this.setState({
			allImages: allImages,
			currentImage: allImages[this.state.currentIndex]
		});
	}
	// ===========LOADS ALL THUMBNAIL IMAGES AND CURRENT IMAGE==============

	// ===================MAPS THUMBNAIL IMAGES====================
	allImagesLoop = () => {
		return this.state.allImages.map((item, i) => {
			return (
				<div
					onClick={this.clickedThumb.bind(null, i)}
					key={i}
					className={'thumbImage'}
					style={{
						background: `url('${item}') center center no-repeat`
					}}
				></div>
			);
		});
	};
	// ===================MAPS THUMBNAIL IMAGES====================

	// ======================NEXT AND PREV BUTTONS====================
	nextBtn = () => {
		if (this.state.currentIndex === this.state.allImages.length - 1) {
			this.setState({
				currentIndex: 0
			});
		} else {
			this.setState({
				currentIndex: this.state.currentIndex + 1
			});
		}
	};
	prevBtn = () => {
		if (this.state.currentIndex === 0) {
			this.setState({
				currentIndex: this.state.allImages.length - 1
			});
		} else {
			this.setState({
				currentIndex: this.state.currentIndex - 1
			});
		}
	};
	// ======================NEXT AND PREV BUTTONS====================

	// ===================CLICK THUMBNAIL IMAGE=======================
	clickedThumb = index => {
		this.setState({
			currentIndex: index
		});
	};
	// ===================CLICK THUMBNAIL IMAGE=======================

	render() {
		return (
			<div className={'gallery'}>
				<div className={'slider'}>
					<div className={'mainImage'}>
						<div className={'arrows leftArrow'} onClick={this.prevBtn}>
							<i className="fas fa-chevron-left"></i>
						</div>
						<div className={'arrows rightArrow'} onClick={this.nextBtn}>
							<i className="fas fa-chevron-right"></i>
						</div>
						<div
							className={'imageOne'}
							style={{
								background: `url('${
									this.state.allImages[this.state.currentIndex]
                                }') center center no-repeat`,
                                backgroundSize: `contain`
							}}
						></div>
					</div>
				</div>
				<div className={'thumbnails'}>{this.allImagesLoop()}</div>
			</div>
		);
	}
}

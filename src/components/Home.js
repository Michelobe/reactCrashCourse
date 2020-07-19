import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


export default class Home extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData set by componentWillMount
            currentIndex: 0
		};
    }


    
    UNSAFE_componentWillMount() {
        this.setState({
            categoriesData: this.props.categoriesData
        });
    }


    loopTitle = () => {

        return this.state.categoriesData.map((item, i) => {
            const loopListings = () => {
                return item.listings.map((listing, i) => {
                    return(
                        <Link to ={`/for-sale`}  key = {i}>
                            {listing.name}
                        </Link>
                    );
                });
            }

            return (
                <div key = {i} className={'categories'}>
                    <Link to ={`/for-sale`}
                          className={'title'}
                    >
                        {item.title}
                    </Link>
                    <div
                            className={`groupLinks ${item.title === 'jobs' || item.title === 'housing' ? 'singleCol' : ''}`}
                            key = {i}
                        >
                        {loopListings()}
                    </div>
                </div>
            );
        });
    }
    
	loopTags = () => {
		let testTags = [1, 2, 3, 4, 5, 6, 7];

		return testTags.map(item => {
			return (
				<div key={item} className={'tag'}>
					Apple Macbook
				</div>
			);
		});
	}

	render() {
		return (
			<div className={'home'}>
				<div className="container">
					<h1>
						Connecting People <br /> Everywhere{' '}
						<span className="happyFace">:-)</span>
					</h1>

					<section className={'links'}>
                        {this.loopTitle()}
                        {/* for sale */}
                    </section>

					<section className={'trending'}>
						<input
							type="text"
							name="search"
							className="search"
							placeholder="Search Classifieds, Jobs, Housing, Discussions, Personals..."
						/>
						<div className={'title'}>
							<i className="far fa-clock"></i>Trending Now
						</div>
						<div className={'trendingTags'}>{this.loopTags()}</div>
					</section>
				</div>
			</div>
		);
	}
}

import React, { Component } from 'react';

export default class Home extends Component {
	constructor() {
		super();
		this.state = {
		};
    }

    loopCategories() {
        let testCategory = [1,2,3,4,5,6,7,8,9];

        return testCategory.map(() => {
            return(
                <div className={'categories'}>
                    <a
                        href={`#`}
                        className={'title'}
                    >
                        For Sale
                    </a>
                    <div
                        className={`groupLinks`}
                    >
                        Cars and Trucks
                    </div>
                </div>
            );
        }
        );
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
	};

	render() {
		return (
			<div className={'home'}>
				<div className="container">
					<h1>
						Connecting People <br /> Everywhere{' '}
						<span className="happyFace">:-)</span>
					</h1>

					<section className={'links'}>
                        {this.loopCategories()}
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

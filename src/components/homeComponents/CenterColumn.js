import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


export default class CenterColumn extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData set by componentWillMount
            isActiveOne: false,
            isActiveTwo: false,
            isActiveThree: false,
            isActiveFour: false,
            isActiveFive: false,
            isActiveSix: false,
            isActiveSeven: false,
            isActiveEight: false,
            seeMore: false
		};
    }
    
    UNSAFE_componentWillMount() {
        this.setState({
            categoriesData: this.props.categoriesData
        });
    }

    // =============================LOOP LISTING FUNCTIONS===============================
    loopListingOne = () => {
        let category = this.props.categoriesData;

        return category[0].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingTwo = () => {
        let category = this.props.categoriesData;

        return category[1].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingThree = () => {
        let category = this.props.categoriesData;

        return category[2].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingFour = () => {
        let category = this.props.categoriesData;

        return category[3].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingFive = () => {
        let category = this.props.categoriesData;

        return category[4].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingSix = () => {
        let category = this.props.categoriesData;

        return category[5].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingSeven = () => {
        let category = this.props.categoriesData;

        return category[6].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    loopListingEight = () => {
        let category = this.props.categoriesData;

        return category[7].listings.map((listing, i) => {
            return(
                <Link to ={`/for-sale`}  key = {i}>
                    {listing.name}
                </Link>
            );
        });
    }
    // =============================LOOP LISTING FUNCTIONS===============================
    
    
    // =============================TRENDING TAGS FUNCTION===============================
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
    // =============================TRENDING TAGS FUNCTION===============================
    
    // =============================MEDIA QUERY DROPDOWN===============================
    changeBoolOne = () => {
        let isActiveOne = this.state.isActiveOne;

        if(isActiveOne === false){
            this.setState({
                isActiveOne: !isActiveOne
            });
        }else {
            this.setState({
                isActiveOne: !isActiveOne
            })
        }
    }
    changeBoolTwo = () => {
        let isActiveTwo = this.state.isActiveTwo;

        if(isActiveTwo === false){
            this.setState({
                isActiveTwo: !isActiveTwo
            });
        }else {
            this.setState({
                isActiveTwo: !isActiveTwo
            })
        }
    }
    changeBoolThree = () => {
        let isActiveThree = this.state.isActiveThree;

        if(isActiveThree === false){
            this.setState({
                isActiveThree: !isActiveThree
            });
        }else {
            this.setState({
                isActiveThree: !isActiveThree
            })
        }
    }
    changeBoolFour = () => {
        let isActiveFour = this.state.isActiveFour;

        if(isActiveFour === false){
            this.setState({
                isActiveFour: !isActiveFour
            });
        }else {
            this.setState({
                isActiveFour: !isActiveFour
            })
        }
    }
    changeBoolFive = () => {
        let isActiveFive = this.state.isActiveFive;

        if(isActiveFive === false){
            this.setState({
                isActiveFive: !isActiveFive
            });
        }else {
            this.setState({
                isActiveFive: !isActiveFive
            })
        }
    }
    changeBoolSix = () => {
        let isActiveSix = this.state.isActiveSix;

        if(isActiveSix === false){
            this.setState({
                isActiveSix: !isActiveSix
            });
        }else {
            this.setState({
                isActiveSix: !isActiveSix
            })
        }
    }
    changeBoolSeven = () => {
        let isActiveSeven = this.state.isActiveSeven;

        if(isActiveSeven === false){
            this.setState({
                isActiveSeven: !isActiveSeven
            });
        }else {
            this.setState({
                isActiveSeven: !isActiveSeven
            })
        }
    }
    // =============================MEDIA QUERY DROPDOWN===============================

    // =============================TOGGLE SEEMORE CLASS===============================
    seeMoreToggle = () => {
        let seeMore = this.state.seeMore;

        if(seeMore === true || seeMore === false){
            this.setState({
                seeMore: !seeMore
            })
        }
    }
    // =============================TOGGLE SEEMORE CLASS===============================

	render() {
        let categories = this.state.categoriesData;


		return (
            <section id = "centerCol">
                <div className = {'centerHeader'}>
                    <h1>Portland, OR</h1>
                </div>
                <div className={'links'}>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[0].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolOne.bind(null)}>
                            {categories[0].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[0].title === 'jobs' || categories[0].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveOne ? 'active' : ''}`}
                        >
                            {this.loopListingOne()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[1].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolTwo.bind(null)}>
                            {categories[1].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[1].title === 'jobs' || categories[1].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveTwo ? 'active' : ''}`}
                        >
                            {this.loopListingTwo()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[2].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolThree.bind(null)}>
                            {categories[2].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[2].title === 'jobs' || categories[2].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveThree ? 'active' : ''}`}
                        >
                            {this.loopListingThree()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[3].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolFour.bind(null)}>
                            {categories[3].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[3].title === 'jobs' || categories[3].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveFour ? 'active' : ''}`}
                        >
                            {this.loopListingFour()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[4].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolFive.bind(null)}>
                            {categories[4].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[4].title === 'jobs' || categories[4].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveFive ? 'active' : ''}`}
                        >
                            {this.loopListingFive()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[5].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolSix.bind(null)}>
                            {categories[5].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[5].title === 'jobs' || categories[5].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveSix ? 'active' : ''}`}
                        >
                            {this.loopListingSix()}
                        </div>
                    </div>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[6].title}
                        </Link>
                        <div className = {'mobileCategory'}
                            onClick = {this.changeBoolSeven.bind(null)}>
                            {categories[6].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[6].title === 'jobs' || categories[6].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveSeven ? 'active' : ''}`}
                        >
                            {this.loopListingSeven()}
                        </div>
                    </div>
                    {/* ==================NOTHING IN RESUME CATEGORY======================= */}
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[7].title}
                        </Link>
                        <div className = {'mobileCategory'}>
                            {categories[7].title}
                        </div>
                        <div
                        className={`groupLinks ${categories[7].title === 'jobs' || categories[7].title === 'housing' ? 'singleCol' : ''}`}
                        >
                            {this.loopListingEight()}
                        </div>
                    </div>
                    {/* ==================NOTHING IN RESUME CATEGORY======================= */}
                </div>

                <div className={'trending'}>
                    <input
                        type="text"
                        name="search"
                        className="search"
                        placeholder="Search Classifieds, Jobs, Housing, Discussions, Personals..."
                    />
                    <div className={'title'}>
                        <i className="far fa-clock"></i>Trending Now
                    </div>
                    {/* =====================================TRENDING LOOP==================================== */}
                    <div className={`trendingTags ${this.state.seeMore ? 'active' : ''}`}>{this.loopTags()}</div>
                    <div className = {`seeMoreLess`} onClick = {this.seeMoreToggle}>
                        <div className = {`btn seeMore ${this.state.seeMore ? 'active' : ''}`}>See More</div>
                        <div className = {`btn seeLess ${this.state.seeMore ? 'active' : ''}`}>See Less</div>
                    {/* =====================================TRENDING LOOP==================================== */}
                    </div>
                </div>
            </section>
		);
	}
}
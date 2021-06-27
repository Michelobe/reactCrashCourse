import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";


export default class CenterColumn extends Component {
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
    

	render() {
        let categories = this.state.categoriesData;


		return (
            <section className={`mainPage`}>
                <div className={'links'}>
                    <div className={'categories'}>
                        <Link to ={`/for-sale`}
                            className={'title'}
                        >
                            {categories[0].title}
                        </Link>
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
                        <div
                        className={`groupLinks ${categories[6].title === 'jobs' || categories[6].title === 'housing' ? 'singleCol' : ''} ${this.state.isActiveSeven ? 'active' : ''}`}
                        >
                            {this.loopListingSeven()}
                        </div>
                    </div>
                </div>
            </section>
		);
	}
}
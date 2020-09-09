import React, { Component } from 'react';

export default class DetailsHead extends Component {
	constructor() {
		super();
		this.state = {
		};
    }

	render() {
		return (
            <section className={'subMenu'}>
                <div className={'direction'}>
                    <div className={'prev btn'}>
                    <i className="fas fa-chevron-circle-left"></i>
                        prev
                    </div>
                    <div className={'next btn'}>
                        next
                        <i className="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
                <div className = {'userInterest'}>
                    <div className = {'reply'}>reply</div>
                    <div className = {'btn favorite'}>
                        <i className="far fa-bookmark"></i>
                        favorite
                    </div>
                    <div className = {'btn hide'}>
                        <i className="far fa-trash-alt"></i>
                        hide
                    </div>
                    <div className = {'btn flag'}>
                        <i className="far fa-flag"></i>
                        flag
                    </div>
                </div>
            </section>
		);
	}
}

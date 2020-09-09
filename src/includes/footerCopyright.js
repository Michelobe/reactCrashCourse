import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

export default class FooterCopyright extends Component {
	constructor() {
		super();
		this.state = {
		};
    }
    

	render() {
		return (
            <div className = {'footerLinks'}>
                {/* ===========WARNING, NOT SEPARATE LINKS. THIS MUST BE CHANGED LATER=========== */}
                <Link to ={`/`} className = {'footerLink'}>
                    <i className="far fa-copyright"></i>
                    <h6>2020</h6>
                    <h6>michaeldelariva</h6>
                    <h6>help</h6>
                    <h6>safety</h6>
                    <h6>privacy</h6>
                    <h6>about</h6>
                </Link>
                {/* ===========WARNING, NOT SEPARATE LINKS. THIS MUST BE CHANGED LATER=========== */}
            </div>
		);
	}
}

import React, { Component } from 'react';
import CenterColumn from './homeComponents/CenterColumn.js';


export default class CenterCol extends Component {
	constructor() {
		super();
		this.state = {
            //categoriesData set by componentWillMount,
            nearbyBool: false
		};
    }


    
    UNSAFE_componentWillMount() {
        this.setState({
            categoriesData: this.props.categoriesData
        });
    }

    toggleNearby = () => {
        let nearbyBool = this.state.nearbyBool;

        if(nearbyBool === true || nearbyBool === false){
            this.setState({
                nearbyBool: !nearbyBool
            })
        }
    }

	render() {
		return (
			<div className={'home'}>
				<div className="container">
                    
                    {/* ===============LEFT COLUMN================ */}
                    <section id = "leftCol">
                        <h1>CityShop</h1>
                        <div className = {'heading'}>
                            <div>create a posting</div>
                            <div>my account</div>
                            <input type = "text" />
                        </div>
                        {/* <div className = {'calendarTable'}>
                            <table>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>9</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>12</td>
                                    <td>13</td>
                                    <td>14</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>16</td>
                                    <td>17</td>
                                    <td>18</td>
                                    <td>19</td>
                                    <td>20</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>22</td>
                                    <td>23</td>
                                    <td>24</td>
                                    <td>25</td>
                                    <td>26</td>
                                    <td>27</td>
                                    <td>28</td>
                                </tr>
                                <tr>
                                    <td>29</td>
                                    <td>30</td>
                                    <td>31</td>
                                </tr>
                            </table>
                        </div> */}
                        <div className = {'aboutLinks'}>
                            <div>cityshop app</div>
                            <div>help, faq, abuse, legal</div>
                            <div>avoid scams & fraud</div>
                            <div>personal safety tips</div>
                            <div>terms of use</div>
                            <div>privacy policy</div>
                            <div>about cityshop</div>
                            <div>cityshop open source</div>
                            <div>cityshop blog</div>
                            <div>best of cityshop</div>
                            <div>cityshop blog</div>

                        </div>
                    </section>
                    {/* ===============LEFT COLUMN================ */}



                    {/* ===============CENTER COLUMN================ */}
                    <CenterColumn categoriesData = {this.props.categoriesData} />
                    {/* ===============CENTER COLUMN================ */}
                    
                    {/* ===============RIGHT COLUMN================ */}
                    <section id = "rightCol">
                        <h1 onClick = {this.toggleNearby.bind(null)}>Nearby</h1>
                        <div className = {`nearContain ${this.state.nearbyBool ? 'active' : ''}`}>
                            <div className = {'nearLink'}>bellingham</div>
                            <div className = {'nearLink'}>bend</div>
                            <div className = {'nearLink'}>boise</div>
                            <div className = {'nearLink'}>chico</div>
                            <div className = {'nearLink'}>corvallis</div>
                            <div className = {'nearLink'}>east oregon</div>
                            <div className = {'nearLink'}>eugene</div>
                            <div className = {'nearLink'}>humboldt</div>
                            <div className = {'nearLink'}>kalispell</div>
                            <div className = {'nearLink'}>kalamath falls</div>
                            <div className = {'nearLink'}>lewiston</div>
                            <div className = {'nearLink'}>medford</div>
                        </div>
                        <div className = {`nearDesktop`}>
                            <div className = {'nearLink'}>bellingham</div>
                            <div className = {'nearLink'}>bend</div>
                            <div className = {'nearLink'}>boise</div>
                            <div className = {'nearLink'}>chico</div>
                            <div className = {'nearLink'}>corvallis</div>
                            <div className = {'nearLink'}>east oregon</div>
                            <div className = {'nearLink'}>eugene</div>
                            <div className = {'nearLink'}>humboldt</div>
                            <div className = {'nearLink'}>kalispell</div>
                            <div className = {'nearLink'}>kalamath falls</div>
                            <div className = {'nearLink'}>lewiston</div>
                            <div className = {'nearLink'}>medford</div>
                        </div>
                    </section>
                    {/* ===============RIGHT COLUMN================ */}



				</div>
			</div>
		);
	}
}







/* <section id = "centerCol">
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
    <div className={'trendingTags'}>{this.loopTags()}</div>
</div>
</section> */












    // =============================CENTER COLUMN===============================
    // loopListingOne = () => {
    //     let category = this.props.categoriesData;
    //     console.log(category[0].title);

    //     return category[0].listings.map((listing, i) => {
    //         console.log(listing);
    //         return(
    //             <Link to ={`/for-sale`}  key = {i}>
    //                 {listing.name}
    //             </Link>
    //         );
    //     });
    // }
    
	// loopTags = () => {
	// 	let testTags = [1, 2, 3, 4, 5, 6, 7];

	// 	return testTags.map(item => {
	// 		return (
	// 			<div key={item} className={'tag'}>
	// 				Apple Macbook
	// 			</div>
	// 		);
	// 	});
    // }
    
    // =============================MEDIA QUERY DROPDOWN===============================
    // changeBoolOne = () => {
    //     let isActiveOne = this.state.isActiveOne;
    //     console.log(isActiveOne);

    //     if(isActiveOne === false){
    //         this.setState({
    //             isActiveOne: !isActiveOne
    //         });
    //     }else {
    //         this.setState({
    //             isActiveOne: !isActiveOne
    //         })
    //     }
    // }
    // =============================MEDIA QUERY DROPDOWN===============================


    // =============================CENTER COLUMN===============================
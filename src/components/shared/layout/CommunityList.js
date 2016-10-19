import React , {Component}from 'react';

export default class CommunityList extends  Component{
    constructor(props){
        super(props);
        this.communityList = []
    }




    render(){
        return (
            <ul>
                {this.communityList.map( (community) => {
                    return(<li className="community-card">
                        <header>
                            <img src="http://d1mawiihsbgnyp.cloudfront.net/austin-tx-village-on-the-park-onion-creek-thumb.jpg"/>
                                <div className="content">
                                    <h2>
                                        <a href="/community/village-on-the-park-onion-creek-1371286">
                                            Village on the Park - Onion Creek
                                        </a>
                                    </h2>
                                    <address>
                                        11300 Farrah Lane, Austin, TX, 78748
                                    </address>
                                </div>
                        </header>
                        <div className="star-rating">
                            <div className="empty-container">
                                <span className="fa fa-star-o" aria-hidden="true"></span>
                                <span className="fa fa-star-o" aria-hidden="true"></span>
                                <span className="fa fa-star-o" aria-hidden="true"></span>
                                <span className="fa fa-star-o" aria-hidden="true"></span>
                                <span className="fa fa-star-o" aria-hidden="true"></span>
                            </div>
                            <div className="full-container" style="width: 100.0%">
                                <span className="fa fa-star" aria-hidden="true"></span>
                                <span className="fa fa-star" aria-hidden="true"></span>
                                <span className="fa fa-star" aria-hidden="true"></span>
                                <span className="fa fa-star" aria-hidden="true"></span>
                                <span className="fa fa-star" aria-hidden="true"></span>
                            </div>
                        </div>

                        <div className="count">
                            (8)
                        </div>
                        <div className="phone-wrapper">
                            <a className="phone-number invocaPhoneNumber" data-invoca="seo_apfm_main" href="tel:844-499-3664">844-499-3664</a>
                            <span className="phone-number-label">
for a local advisor
</span>
                        </div>
                        <p className="description">
                            Village on the Park - Onion Creek is an assisted living community located in Austin, TX. Austin is located in Travis County and is home to just over 912,000 people. Austin is a fun city where residents can enjoy dancing, shopping, going out to great restaurants, going to sporting events and other fu...
                        </p>
                        <div className="btn-wrapper">
                            <a className="learn-more-btn" href="http://www.aplaceformom.com/community/village-on-the-park-onion-creek-1371286">
                                learn more
                            </a>
                            <a className="get-pricing-btn" href="http://www.aplaceformom.com/community/village-on-the-park-onion-creek-1371286#get-pricing-anchor">
                                get pricing
                            </a>
                        </div>

                    </li>)
                })}
            </ul>
        );
    }
}
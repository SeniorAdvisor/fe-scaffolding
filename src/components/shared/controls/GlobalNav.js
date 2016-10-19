import React, {Component, PropTypes} from "react";
import {Link} from "react-router";
export default class GlobalNav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="main-nav">
                        <span className="mobile-only close-btn">
                            <span className="fa fa-times" onClick="toggleMenu()" aria-hidden="true"></span>
                        </span>
                        <span className="mobile-only search-bar">
                            <div className="search-bar">
                                <form onSubmit="submitSearch(&quot;searchTermInput&quot;)">
                                    <button>
                                        <span className="fa fa-search" aria-hidden="true"></span>
                                    </button>
                                    <input id="searchTermInput" placeholder="Search by City or Zip" required="required"
                                           type="text"/>
                                </form>
                            </div>

                        </span>
                    <span className="mobile-only">
                            <a href="/">
                                home
                            </a>

                        </span>
                    <a href="/test">Testing</a>
                    <span className="active"><a href="assisted-living">assisted living</a></span>
                    <span className=""><a href="alzheimers-care">memory care</a></span>
                    <span className=""><a href="/nursing-homes">nursing homes</a></span>
                    <span className=""><a href="/search-results">more living options</a></span>
                    <span className="divider"></span>
                    <span className=""><a href="/senior-care-resources">planning &amp;advice</a></span>
                    <span className=""><a href="/eldercare-advisors">how our service works</a></span>

                </nav>
            </div>
        );
    }


}


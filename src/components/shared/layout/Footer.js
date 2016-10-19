import React , {Component}from 'react';

export default class Footer extends  Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div>
                <footer className="main-footer">
                    <div className="top">
                        <div className="about-apfm">
                            <h2>
                                About A Place for Mom
                            </h2>
                            <p>
                                A Place For Mom is the largest assisted living referral service. We are paid by our participating communities, therefore our service is offered at no charge to families.
                            </p>
                            <ul>
                                <li>
                                    Become a partner
                                </li>
                                <li>
                                    See employment opportunities
                                </li>
                                <li>
                                    Contact us
                                </li>
                            </ul>
                            <a href="/about">
                                Find out more
                                <span className="fa fa-angle-right" aria-hidden="true"></span>
                            </a>
                        </div>

                        <div className="stay-in-touch">
                            <h2>
                                Stay In Touch
                            </h2>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/aplaceformom" target="_blank">
                                        <span className="fa fa-facebook" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/aplaceformom" target="_blank">
                                        <span className="fa fa-twitter" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://plus.google.com/+aplaceformom/posts" target="_blank">
                                        <span className="fa fa-google-plus" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.linkedin.com/company/a-place-for-mom" target="_blank">
                                        <span className="fa fa-linkedin" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/user/aplaceformom" target="_blank">
                                        <span className="fa fa-youtube" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://www.pinterest.com/aplaceformom" target="_blank">
                                        <span className="fa fa-pinterest" aria-hidden="true"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://instagram.com/aplaceformom" target="_blank">
                                        <span className="fa fa-instagram" aria-hidden="true"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="bottom">
                        <p>
                            Copyright ©2016 A Place for Mom, Inc. All Rights Reserved.
                            <a href="/privacy">Privacy</a>
                            &amp;
                            <a href="/terms-of-use">Terms</a>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}
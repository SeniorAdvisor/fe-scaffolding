import React, {Component}from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <header className="app-header">
                    <div className="logo-wrapper">
                        <a href="/">
                            <img className="logo" src="/assets/logo-edebb5fc6c2179a8610b692695c7770c0cee24beef32fdf8b020cd812e9e8cb6.png"/>
                        </a>
                        <span className="tagline">connecting families to senior living</span>
                    </div>

                </header>

            </div>
        );
    }
}
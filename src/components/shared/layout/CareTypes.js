import React , {Component}from 'react';

export default class CareTypes extends  Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div>
                <aside className="other-care-types">
                    <ul>
                        <li className="active">
                            <a href="/assisted-living/texas/austin">
                                Assisted Living
                                <span>
(16)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/adult-day-services/texas/austin">
                                Adult Day Services
                                <span>
(1)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/alzheimers-care/texas/austin">
                                Alzheimer's Care
                                <span>
(13)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/home-care/texas/austin">
                                Home Care
                                <span>
(7)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/independent-living/texas/austin">
                                Independent Living
                                <span>
(9)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/residential-care-home/texas/austin">
                                Residential Care Home
                                <span>
(5)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/respite-care/texas/austin">
                                Respite Care
                                <span>
(32)
</span>
                            </a>
                        </li>
                        <li>
                            <a href="/retirement-community/texas/austin">
                                Retirement Community
                                <span>
(9)
</span>
                            </a>
                        </li>
                    </ul>

                </aside>
            </div>
        );
    }
}
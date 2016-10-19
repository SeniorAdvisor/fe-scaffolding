import React, {Component}from 'react';
import FlexedUIContainer from '../layout/FlexedUIContainer'


export default class LeadForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <FlexedUIContainer id="lead-form"
                               reverse="standard"
                               direction="column"
                               styleHeight="300px"
                               styleWidth="100%">
                <form method="post">
                    <FlexedUIContainer reverse="standard"
                                       direction="column"
                                       styleHeight="300px"
                                       styleWidth="100%"

                    >
                        <header>
                            <span>
                            Compare Costs, Photos, &amp; Reviews of More Than
                            <strong>
                            16
                            </strong>
                            Options in
                            <strong>
                            Austin, TX
                            </strong>
                            </span>
                            <img class="arrow-image-mobile"
                                 src="/assets/orange-arrow-mobile@2x-1974ce694fcd0b808fa37c2ab2eb9c16a2279c5f4db7fdb8487f9d8d502d409d.png"/>
                                <img class="arrow-image-desktop"
                                     src="/assets/orange-arrow-desktop-db8ac90e26b8267e9aeb107b559bfe9011b9eb8eb6de8f68100a4796ef2a1a42.png"/>
                        </header>
                        <input placeholder="Enter City or Postal Code" type="area" name="user-area" id="userArea"/>
                        <input type="text" name="user-name" id="userName"/>
                        <input type="phone" name="user-phone" id="userPhone"/>
                        <button type="submit">Search <span> > </span></button>

                        <p className="need-help call-out">
                            Need Help? Call 855-816-1868
                        </p>
                    </FlexedUIContainer>
                </form>
            </FlexedUIContainer>
    );
    }
    }
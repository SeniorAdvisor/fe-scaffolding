import React, {Component, PropTypes} from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import * as DestinationActions from '../../redux/modules/Desintation';
import {isLoaded, load as loadDestinations} from '../../redux/modules/Desintation';
import {initializeWithKey} from 'redux-form';
import {
    LeadForm,
    DesiredCare,
    CareTypes,
    ResultsTitle,
    CommunityList,
    SeoBlock,
    GlobalNav ,
    Header,
    Footer
} from '../../components/index'
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  deferred: true,
  promise: ({store: {dispatch, getState}}) => {
    if (!isLoaded(getState())) {
      return dispatch(loadDestinations());
    }
  }
}])
@connect(
    state => ({
      data: state.destination.data,
    }),
    {...DestinationActions, initializeWithKey })

export default class Destination extends Component {
    constructor(props) {
        super(props);
        this.aggregates = this.props.aggregates;
        this.communities = this.props.communities;
        this.currentCareType = this.props.currentCareType;
        this.localitySeo = this.props.localitySeo;
        this.location = this.props.location;
        this.otherCareTypes = this.props.otherCareTypes;
        this.relatedContent = this.props.relatedContent;
    }


    render() {
        //console.table(this.props)
        return (
            <div id="DestinationComponent">

                    <Header/>
                    <GlobalNav />
                    <LeadForm name="Greg"></LeadForm>
                    <SeoBlock></SeoBlock>
                    <ResultsTitle></ResultsTitle>
                    <CareTypes></CareTypes>
                    <CommunityList data={this.communities}></CommunityList>
                    <DesiredCare></DesiredCare>
                    <SeoBlock/>
                    <Footer/>
           </div>
        );
    }
}
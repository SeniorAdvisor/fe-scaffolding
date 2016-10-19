import React , {Component}from 'react';

export default class ResultsTitle extends  Component{
    constructor(props){
        super(props);
    }



    render(){
        return (
            <div>
                <h2 class="results-title">
                    Senior housing types in
                    <strong>
                        Austin, TX
                    </strong>
                </h2>
            </div>
        );
    }
}
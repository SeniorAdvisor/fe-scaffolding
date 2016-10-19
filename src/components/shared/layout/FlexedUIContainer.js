import React , {Component}from 'react';

export default class FlexedUIContainer extends  Component{
    constructor(props){
        super(props);
    }



    render(){
        let {id, reversed, direction , styleHeight, styleWidth} = this.props

        if(!direction) direction = 'row';
        if(!reversed) reversed =   'standard';

        return (
            <div id={id} className={`UIContainer flexbx ${direction} ${reversed} `}
                style={{width: styleWidth,height: styleHeight}}
            >


                {this.props.children}
            </div>
        );
    }
}
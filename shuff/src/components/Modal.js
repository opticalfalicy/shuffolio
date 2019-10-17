import React from 'react';

export default class Modal extends React.Component {

    constructor(){
        super();
    }

    render(){
        if(!this.props.show){
            return null;
        }
        else{console.log('showing')}

        return(
            <div>Modal</div>
        );
    }
}
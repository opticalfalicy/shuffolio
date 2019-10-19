import React from 'react';

import '../sass/components/modal.sass';

export default class Modal extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.aModal === false){
            return null;
        }
        else

        return(
            <div className="modal-div">
                <div className="modal-exit">X</div>
                <div className="modal-pics"></div>
            </div>
        );
    }
}
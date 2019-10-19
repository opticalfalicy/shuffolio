import React from 'react';

import '../sass/components/modal.sass';

export default class Modal extends React.Component {

    constructor(props){
        super(props);
    }

    render(){

       


        if(this.props.modal === false){
            return null;
        }
        // if(this.props.modal === true && this.props.contentA === true){
        //     return(
        //         <div className="modal-div">
        //             <div className="modal-exit">X</div>
        //             <div className="modal-pics"></div>
        //         </div>
        //     );

        // }
        let slide;

        if(this.props.name === "A"){
            
            return slide = "yo"
        
            console.log('props', this.props)
        }

        
        return(
            <div className="modal-div">
                <div className="modal-exit" onClick={this.props.closeModal}>X</div>
                <div className="modal-pics"></div>
            </div>
        );

        // if(this.props.contentA === true){
        //     return slideA = <div>"YO"</div>
        // }
    }
}
import React from 'react';
import Modal from './Modal'

import '../sass/components/more.sass'

export default class More extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal: this.props.modal
        };
    }

    // showModal = e => {
    //     this.setState({
    //         modal: true
    //     });


    //     console.log('modal')
    // };
    
    render (){

        if(this.props.modal === true){
            return null
        }

        else

        
        return(
            <div className="more-div">
                {/* <div className="more-button" onClick={e => {this.showModal()}}> */}
                <div className="more-button" onClick={this.props.showModal}>
                    More
                </div>
                    {/* <Modal modal={this.state.modal} /> */}
                

    </div>
    );
}
}





// if(this.props.modal === true){
//     return(
// <div className="more-div-disabled">
//  {/* <div className="more-button" onClick={e => {this.showModal()}}> */}
//  <div className="more-button-disabled" onClick={this.props.showModal}>
//      More
//  </div>
//      {/* <Modal modal={this.state.modal} /> */}
 

// </div>
// );
// }

// else if (this.props.modal !== true)

// return(
// <div className="more-div">
//  {/* <div className="more-button" onClick={e => {this.showModal()}}> */}
//  <div className="more-button" onClick={this.props.showModal}>
//      More
//  </div>
//      {/* <Modal modal={this.state.modal} /> */}
 

// </div>
// );
// }
import React from 'react';
import Modal from './Modal'

import '../sass/components/more.sass'

export default class More extends React.Component {
    constructor(){
        super();
        this.state = {
            show: false
        };
    }

    // showModal = e => {
    //     this.setState({
    //         show: true
    //     });


    //     console.log('show')
    // };
    
    render (){
        return(
            <div className="more-div">
                <div className="more-button">
                    More
                </div>
                    {/* <Modal show={this.state.show} /> */}
                

    </div>
    );
}
}
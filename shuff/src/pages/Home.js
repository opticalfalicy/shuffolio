import React from 'react';
import {PgRight, PgLeft, More, Modal} from '../components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../sass/pages/Home.sass'

import bus from '../media/bus.JPG';
import rund from '../media/rund.jpg';
import sky from '../media/sky.jpg';


export default class Home extends React.Component {
    
    constructor(){
        super();
        this.state = {
            aModal: false,
            bModal: false,
            cModal: false
        };
    }

    showAModal = e => {
        this.setState({
            aModal: true
            
        });


        console.log('modal')
    };
    showBModal = e => {
        this.setState({
            bModal: true
            
        });


        console.log('modal')
    };
    showCModal = e => {
        this.setState({
            cModal: true
            
        });


        console.log('modal')
    };


    render (){
        console.log(this.state.modal)
        return(

            <div className="home-div">
             {/* <div className="home-slide">  */}
            <Carousel className="home-carousel" showThumbs={false}>
                    <div className="carousel-item">
                        <img className="carousel-img" src={bus}></img>
                        <More showAModal={this.showAModal.bind(this)} modal={this.state.aModal}/>
                        <Modal modal={this.state.aModal} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={sky}/>
                        <More showBModal={this.showBModal.bind(this)} modal={this.state.bModal}  />
                        <Modal modal={this.state.bModal} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={rund}/>
                        <More showCModal={this.showCModal.bind(this)} modal={this.state.cModal}  />
                        <Modal modal={this.state.cModal} />
                    </div>  
                    </Carousel>
                {/* // <More></More> */}
                {/* </div> */}
                

    </div>
    );
}
}

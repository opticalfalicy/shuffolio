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
<<<<<<< HEAD
            modal: false,
            slideA: false,
            slideB: false,
            slideC: false
=======
            aModal: false,
            bModal: false,
            cModal: false
>>>>>>> master
        };
    }

    showAModal = e => {
<<<<<<< HEAD
        let name = e.target.getAttribute('name')

        this.setState({
            modal: true,
            slideA: true
            
        });
        console.log('modal')

    };
    showBModal = e => {
        this.setState({
            modal: true,
            slideB: true
=======
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
>>>>>>> master
            
        });


        console.log('modal')
    };
    showCModal = e => {
        this.setState({
            modal: true,
            slideC: true
            
        });


        console.log('modal')
    };

    closeModal = e => {
        console.log('close');
        this.setState({
            modal: false,
            slideA: false,
            slideB: false,
            slideC: false
        })
    }


    render (){
        console.log(this.state.modal)
        return(

            <div className="home-div">
             {/* <div className="home-slide">  */}
            <Carousel className="home-carousel" showThumbs={false}>
                    <div className="carousel-item">
                        <img className="carousel-img" src={bus}></img>
<<<<<<< HEAD
                        <More showModal={this.showAModal.bind(this)} modal={this.state.modal} />
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"A"} content={this.state.slideA} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={sky}/>
                        <More showModal={this.showBModal.bind(this)} modal={this.state.modal} />
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"B"} content={this.state.slideB} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={rund}/>
                        <More showModal={this.showCModal.bind(this)} modal={this.state.modal} />
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"C"} content={this.state.slideC} />
=======
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
>>>>>>> master
                    </div>  
                    </Carousel>
                {/* // <More></More> */}
                {/* </div> */}
                

    </div>
    );
}
}

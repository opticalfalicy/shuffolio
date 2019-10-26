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
            modal: false,
            slideA: false,
            slideB: false,
            slideD: false
        };
    }

    showAModal = e => {
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
    showDModal = e => {
        this.setState({
            modal: true,
            slideD: true
            
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

        
        let arrowControl;

        if(this.state.modal === false){
            arrowControl = "arrowOn"
        }
        if(this.state.modal === true){
            arrowControl = "arrowOff"
        }

        console.log(this.state.modal)
        return(<div>
            <div className="nav-main">
            {/* <ul className="nav-items">
                <li>
                    About
                </li>
                {/* <li>
                    Media
                </li>
                <li>
                    Contact
                </li> */}
            {/* </ul> */} 
        </div>
            <div className="home-div">
             {/* <div className="home-slide">  */}
            <Carousel className={`home-carousel ${arrowControl}`} showThumbs={false}>
                    <div className="carousel-item">
                        <img className="carousel-img" src={bus}></img>
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"A"} content={this.state.slideA} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={sky}/>
                        {/* <More showModal={this.showBModal.bind(this)} modal={this.state.modal} /> */}
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"B"} content={this.state.slideB} />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={rund}/>
                        {/* <More showModal={this.showCModal.bind(this)} modal={this.state.modal} /> */}
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"C"} content={this.state.slideC} />
                    </div>  
                    <div className="carousel-item">
                        {/* <img className="carousel-img" src={rund}/> */}
                        {/* <More showModal={this.showCModal.bind(this)} modal={this.state.modal} /> */}
                        <More showModal={this.showAModal.bind(this)} modal={this.state.modal} />
                        <Modal modal={this.state.modal} closeModal={this.closeModal.bind(this)} name={"D"} content={this.state.slideD} />
                    </div>  
                    </Carousel>
                {/* // <More></More> */}
                {/* </div> */}
                

    </div>
    </div>
    );
}
}

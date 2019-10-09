import React from 'react';
import {PgRight, PgLeft, More} from '../components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../sass/pages/Home.sass'

import bus from '../media/bus.JPG';
import rund from '../media/rund.jpg';
import sky from '../media/sky.jpg';


export default class Home extends React.Component {
    constructor(){
        super();
    }
    
    render (){
        return(
            <div className="home-div">
             {/* <div className="home-slide">  */}
            <Carousel className="home-carousel" showThumbs={false}>
                    <div className="carousel-item">
                        <img className="carousel-img" src={bus}></img>
                        <More className="more-button" />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={sky}/>
                        <More className="more-button" />
                    </div>  
                    <div className="carousel-item">
                        <img className="carousel-img" src={rund}/>
                        <More className="more-button" />
                    </div>  
                    </Carousel>
                {/* // <More></More> */}
                {/* </div> */}
                

    </div>
    );
}
}

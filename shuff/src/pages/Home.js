import React from 'react';
import {PgRight, PgLeft, More} from '../components'
import '../sass/pages/Home.sass'

export default class Home extends React.Component {
    constructor(){
        super();
    }
    
    render (){
        return(
            <div className="home-div">
                <div className="home-slide">
                <PgLeft />
                <More />
                <PgRight />
                </div>
                

    </div>
    );
}
}

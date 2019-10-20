import React from 'react';

import '../sass/components/modal.sass';

let car2 = '../media/car2.JPG';
let dakota = './dakota.JPG';
let car = './car.JPG';


let urls = [
    car2,
    car,
    dakota

]

export default class Modal extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageUrls: urls
        }
    }


    renderImgA(imgUrl){
        return(
            <div className="img-div">
                <img className="img-item" src={require(`../media/car2.JPG`)}></img>
            </div>
        )   
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

        // // }
        // let img, img1, img2, img3;

        let imgDiv;

        if(this.props.name === "A" && this.props.modal !== false){
            
            // imgDiv = this.state.imageUrls.map(imgUrl => this.renderImgA(imgUrl))
            imgDiv = <div className="img-div">
                <img className="img-item" src={require(`../media/car2.JPG`)}></img> 
                <img className="img-item" src={require(`../media/car.JPG`)}></img> 
                <img className="img-item" src={require(`../media/dakota.JPG`)}></img> 

            </div>
        
            console.log('props', this.props)
        }

        
        return(
            <div className="modal-div">
                <div className="modal-exit" onClick={this.props.closeModal}>X</div>
                <div className="modal-pics"></div>
                {/* <img className="img-item" src={car2} /> */}
                {imgDiv}
            </div>
        );

        // if(this.props.contentA === true){
        //     return slideA = <div>"YO"</div>
        // }
    }
}
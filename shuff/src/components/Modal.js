import React from 'react';

import InstagramEmbed from 'react-instagram-embed'

import '../sass/components/modal.sass';
import '../sass/components/modal.scss';

let car2 = '../media/car2.JPG';
let dakota = './dakota.JPG';
let car = './car.JPG';
let dauph = '../media/dauph.JPG';
let garb = '../media/garb.JPG';
let garg = '../media/garg.JPG';
let hesh = '../media/hesh.JPG';
let house = '../media/house.JPG';
let jers = '../media/jers.JPG';
let pand = '../media/pand.JPG';
let rick = '../media/rick.JPG';
let styl = '../media/styl.JPG';
let tree = '../media/tree.JPG';
let vau = '../media/vau.JPG';
let weeds = '../media/weeds.JPG';



let urls = [
    car2,
    car,
    dakota,
    dauph,
    garb,
    garg,
    hesh,
    house,
    jers,
    pand,
    rick,
    styl,
    tree,
    vau,
    weeds

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
                <img className="img-item" src={require(`../media/styl.JPG`)}/>
                <img className="img-item" src={require(`../media/garg.JPG`)}></img> 
                <img className="img-item" src={require(`../media/base.JPG`)}></img> 

            </div>
        
            console.log('props', this.props)
        }

        else if(this.props.name === "B" && this.props.modal !== false){
            imgDiv = <div className="img-div">
            <img className="img-item" src={require(`../media/dauph.JPG`)}></img> 
            <img className="img-item" src={require(`../media/garb.JPG`)}></img> 
            <img className="img-item" src={require(`../media/jers.JPG`)}></img> 
            <img className="img-item" src={require(`../media/tree.JPG`)}></img> 
            <img className="img-item" src={require(`../media/weeds.JPG`)}></img> 
            <img className="img-item" src={require(`../media/dauph2.JPG`)}></img> 

        </div>
        } 

        else if(this.props.name === "C" && this.props.modal !== false){
            imgDiv = <div className="img-div">
                <img className="img-item" src={require(`../media/hesh.JPG`)}/>
                <img className="img-item" src={require(`../media/liba.JPG`)}/>
                <img className="img-item" src={require(`../media/rick.JPG`)}/>
                <img className="img-item" src={require(`../media/summ.JPG`)}/>
                <img className="img-item" src={require(`../media/seen.JPG`)}/>
                <img className="img-item" src={require(`../media/goat.JPG`)}/>
            </div>
        }

        else if(this.props.name === "D" && this.props.modal !== false){
            imgDiv = <div className="img-div">
                {/* <img className="img-item insta-img" src={require(`../media/graf.JPG`)}></img>More */}
                {/* <a href=>instagram://user?username=kevinandamanda</a> */}
                <InstagramEmbed url="https://www.instagram.com/p/BxvXOP4Fgpx/"
                className="insta-img"
                containerTagName='div'
                hideCaption={true}
                />
                
            </div>
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
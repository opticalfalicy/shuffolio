import React from 'react';

import "../sass/layout/Nav.sass"

export default class Nav extends React.Component{

    render(){
        return(
            <div className="nav-main">
                <ul className="nav-items">
                    <li>
                        About
                    </li>
                    <li>
                        Media
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        )
    }
}
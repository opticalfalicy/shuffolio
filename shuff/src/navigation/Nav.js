import React from 'react';

export default class Nav extends React.Component{

    render(){
        return(
            <div className="nav-main">
                <ul className="nav-items">
                    <li>
                        Home
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
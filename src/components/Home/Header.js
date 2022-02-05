import React from "react";
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import hacker from '../../photo/hacker.jpg';
import laptop from '../../photo/laptop.png';

function Header() {
    return (
        <>
            <div className="container-fluid header" style={{backgroundImage: `url(${hacker})`}}>
                <div className="header-div">
                    <h1 className="text-white text-center ">This is my first react App</h1>
                    <img src={laptop} />
                </div>
            </div>
        </>
    )
}
 export default Header;
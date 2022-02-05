import React from 'react';
import ReactDOM from "react-dom";
import './About.css';

function About() {
    return(
        <>
            <div className="container-fluid banner">
                <div className="content">
                  <h1>
                    Real Coding
                    Project
                  </h1>

                  <p>
                    Our courses are speacifically designed to make
                    you build real-life Projects from start to finish.
                    We also offer certificates.
                  </p>

                  <ul className="join-btn">
                    <a href="#" class="try-btn">Try for free</a>
                    <a href="#" class="join-btn">Sign up now</a>
                  </ul>
                </div>

                <div className="illustrator">
                  <img src='https://i.imgur.com/j3L7yLJ.png' />
                </div>
            </div>
        </>

    )
}

export default About;
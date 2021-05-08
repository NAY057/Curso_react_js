import React from 'react'
import LogoPlatziHome from '../images/platziconf-logo.svg';
import AstronautHome from '../images/astronauts.svg';
import './styles/Home.css'
import { Link } from 'react-router-dom';


function Home() {
    return(
        <>
        <div className="Home" >
            <div className="container">

                <div className="row">
                    <div className="Home__col col-12 col-md-4">
                        <img src={LogoPlatziHome} alt="LOGO PLATZI"/>
                        <h2>PRINT YOUR BADGES</h2>
                        <h3>The easiest way to manage your conderence</h3>

                        <Link to='/badges' className="btn btn-primary"> Start</Link>
                    </div>
                    <div className="Home__col d-none d-md-block col-md-8">
                        <img src={AstronautHome} alt="LOGO ASTRONAUTA"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
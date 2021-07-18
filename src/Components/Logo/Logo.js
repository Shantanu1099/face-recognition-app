import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Brain from './brain.png';

const Logo =  () => {
    return (
        <div className = "ma4 mt0">
            <Tilt className="Tilt br3 shadow-3 " options={{ max : 75 }} style={{ height: 120, width: 150 }} >
                <div className="Tilt-inner pa3"> <img alt= "galaxy pic" src={Brain} style={{width:'4rem'}}/> </div>
            </Tilt>
        </div>
    );
}

export default Logo;
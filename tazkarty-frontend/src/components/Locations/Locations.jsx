import React from 'react';
import './Locations.css'
import { BiSolidMap } from 'react-icons/bi';

const Locations = (props) => {
    return (
        <div className='location'>
            <span >
                <h4 className='venu'>Venue:</h4>
                <h5>{props.name}</h5>
            </span>
           
            <a href={props.link} target="_blank" rel="noopener noreferrer">  <BiSolidMap aria-label="Map icon" />Google Maps</a>
        </div>
    );
};

export default Locations;

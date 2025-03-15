import React from 'react';
import'./Organizers.css';


const Organizers = (props) => {
    return (
        <div className='org'>
        <p className='orga'>organized by</p>
        <h1>{props.name}</h1>
        </div>
    );
};

export default Organizers;

import React from 'react';
import './Date_Time.css'


const Date_Time = (props) => {
    return (
        <div className="datetime">
            <h2>{props.title}</h2>
            <h5>date and time:</h5>
            <h2>{props.time}</h2>
        </div>
    );
};

export default Date_Time;

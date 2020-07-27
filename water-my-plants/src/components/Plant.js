import React from 'react';

const Plant = props => {

    return (

        <div className='plant-wrapper'>
            <p>{props.nickname}</p>
            <p>{props.species}</p>
            <p>{props.h2oFrequency}</p>
            {props.image && <img src={props.image} alt={props.species}/>}
        </div>

    );

};

export default Plant;
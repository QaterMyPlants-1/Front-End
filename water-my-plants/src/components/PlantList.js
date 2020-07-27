import React from 'react';
import {connect} from 'react-redux';

import Plant from './Plant';

const PlantList = props => {

    return (

        <div className='plant-list-wrapper'>
            {props.plants.length > 0 && (props.plants.map(item => {
                return <Plant key={item.id} 
                              nickname={item.nickname} 
                              species={item.species} 
                              h2oFrequency={item.h2oFrequency}
                              image={item.image} />
            }))}
        </div>

    );

};

const mapStateToProps = state => {

    return {

        plants: state.plants

    };

};

export default connect(

    mapStateToProps

)(PlantList);
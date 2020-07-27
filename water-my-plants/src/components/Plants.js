import React from 'react';

import PlantForm from './PlantForm';
import PlantList from './PlantList';

const Plants = () => {

    return (

        <div className='plants-wrapper'>
            <PlantForm />
            <PlantList />
        </div>

    );

};

export default Plants;
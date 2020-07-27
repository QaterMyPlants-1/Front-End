import React, {useState} from 'react';

const initialFormState = {

    //id: 0, //how to increment? server side?
    nickname: '',
    species: '',
    h2oFrequency: '', //how to implement?
    image: '' //optional

};

const PlantForm = () => {

    const [formState, setFormState] = useState(initialFormState);

    const handleSubmit = event => {

        event.preventDefault();

        // validation here
        
        console.log(formState); // to test form output/submit values

        setFormState(initialFormState); // reset form state if successful

    }

    const handleChanges = event => {

        //event.preventDefault();

        setFormState({

            ...formState,
            [event.target.name]: event.target.value

        });

    };

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nickname'>Nickname:</label>
                <input name='nickname' value={formState.nickname} onChange={handleChanges} />
                <label htmlFor='species'>Species:</label>
                <input name='species' value={formState.species} onChange={handleChanges} />
                <label htmlFor='h2oFrequency'>Water Frequency:</label>
                <input name='h2oFrequency' value={formState.h2oFrequency} onChange={handleChanges} />
                <button type='submit'>Submit</button>
            </form>
        </div>

    );

};

export default PlantForm;
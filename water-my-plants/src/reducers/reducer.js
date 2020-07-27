import {stuff} from '../actions/actions';

const initialState = {

    plants: [
        {id: 0,
        nickname: 'bob',
        species: 'bobplanticus',
        h2oFrequency: 'whenever he is chill'},
        {id: 1,
        nickname: 'sally',
        species: 'sallyplanticus',
        h2oFrequency: 'constantly needy',
        image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg'}
    ]

};

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        //cases
        default:
            return state;

    };

};

export default reducer;
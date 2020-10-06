const initialState = {
    name: 'Mexique',
    continent: 'Amérique latine',
    departure: '20 janvier 2019',    
};

const newTravel = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default newTravel;
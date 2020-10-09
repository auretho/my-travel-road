

const initialState = {
    firstname: 'John',
    lastname: 'Deuf',
    pseudo: "DuhR",
    email: 'JohnDeufDurH@Grokif.miam',
    city: 'MyTravelTown',
    cityCode: 69999,
    description: "J'adoooore le jaune d'oeuf, je parcours le monde à la recherche du jaune d'oeuf ultime, suivez moi dans mes aventures mes COCO...ttes  ",
    cover: "",
    avatar: "",
    currentPassword: "",
    password1: "",
    password2: "",
    editMessage:"",
}

const user = (state = initialState, action = {}) => {
    switch (action.type) {
            
        default:
            return state;
    }
};

export default user;
export const initialState={
    movies:[],
};

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_MOVIE':
            console.log("action.item: ", action.item)
            return {
                movies: action.item,
            };
        default:
            return state;
    }
};
export default reducer;
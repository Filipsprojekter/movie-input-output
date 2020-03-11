// Action creator
export const selectMovie = (movie) => {
    // return an action
    return{
        type: 'MOVIE_SELECTED',
        payload : movie
    };
};






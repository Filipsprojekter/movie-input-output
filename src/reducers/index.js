import {MOCK_MOVIES} from './../shared/MockMovies';
import {combineReducers} from 'redux';


const moviesReducer = () => {
    return MOCK_MOVIES;    
}

const selectedMovieReducer = (selectedMovie=null, action) => {
    if(action.type === 'MOVIE_SELECTED'){
        return action.payload;
    }

    return selectedMovie;
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie : selectedMovieReducer
});

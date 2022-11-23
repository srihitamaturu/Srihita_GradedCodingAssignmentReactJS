import React from "react";
import { Button} from "react-bootstrap";
import IMovie from "../model/IMovie";
import { FAVORITE_MOVIES} from "../constants/constants"
import { getIdOfLastMovie, getMovieByCategoryAndID, getMovieByTitleAndYear, addMovieByCategory } from "../services/movies";
import { toast } from "react-toastify";


type MovieModel = {
    movie : IMovie;
    movieCategory : string;
}

function AddToFavourite ( {movie, movieCategory} : MovieModel) {
    
    return (
        <React.Fragment>
            <div style={ ({ marginBottom: '0.8rem', fontSize:'.9em'}) }>
            <Button onClick = { () => {addFavouriteMovie(movie.id, movieCategory)} } key={movie.title} style={{width:'13em' }}>Add to Favourite</Button>
            </div>
        </React.Fragment>
        
    )
};

async function addFavouriteMovie  (id : number, movieCategory : string) {
    try {

        const favoriteMovie : IMovie = await getMovieByCategoryAndID(movieCategory, id);
        const movieByTitleAndYear = await getMovieByTitleAndYear(favoriteMovie.title, favoriteMovie.year);

        if(movieByTitleAndYear !== null){
            toast.error(`"${favoriteMovie.title}" movie already added to favorites !!!`);
            return;
        }

        const lastMovieID : number = await getIdOfLastMovie(FAVORITE_MOVIES);
        favoriteMovie.id = lastMovieID + 1;
        await addMovieByCategory(favoriteMovie, FAVORITE_MOVIES );
        toast.success(`${favoriteMovie.title}" movie successfully added to favorites !!!`);
    }
    catch (error : any) {
        toast.error(`Error while adding movie to favourites !!!`);
    }
}

export default AddToFavourite;
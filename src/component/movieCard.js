import React from "react";
import Rating from '@mui/material/Rating'

function MovieCard({movies}) {
    return ( 
        <div className="moviecard">
<div className="movie">
    <img className="poster" src={movies.posterUrl} alt=" "/>
    
        <div className="descreption">
            <div className="box">
                <h4 className="title" style={{width:"160px", textAlign:"center",}}>{movies.title}</h4>
            </div>
        <div >
            <h5 className="overview">{movies.description}</h5>
        </div>
        <Rating name="read-only" value={movies.rating} readOnly max={10} />
    </div>
</div>
        </div>
     );
}

export default MovieCard;


import React from "react";
import MovieCard from "./movieCard";

function MovieList({movies}) {
    return (  
<div className="container">
{movies.map((el)=>(<MovieCard movies={el} key={el.id}/>))}

</div>
    );
}

export default MovieList;
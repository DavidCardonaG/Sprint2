import React from 'react'
import {Card} from '../Styled/App'
const Cards = ({movie}) => {

    return (
        <div  className="container row row-cols-1 row-cols-md-3 g-0 py-3">
       
        <Card >
                    <img src={movie.Poster} width="100%" height="100%" className="" alt="..." />
                    <span id="value" ><i class="fas fa-star"></i>  {movie.Value}</span>
        </Card>
        </div>

    )
}

export default Cards
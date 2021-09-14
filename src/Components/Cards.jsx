import React from 'react'
import {Card} from '../Styled/App'
const Cards = ({movie}) => {

    return (
        <Card >
            <butoon onClick={()=>{}}>
            <div className="">
                <div className="">
                    <img src={movie.Poster} width="100%" height="100%" className="" alt="..." />
                    <span id="value" ><i class="fas fa-star"></i>  {movie.Value}</span>
                </div>
            </div>
             </butoon>
        </Card>

    )
}

export default Cards
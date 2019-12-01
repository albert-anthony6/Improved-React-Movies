import React from 'react';
import {Link} from '@reach/router';

import {StyledMovieThumb} from '../styles/StyledMovieThumb';

const MovieThumb = ({image, movieId, clickable}) => (
    <StyledMovieThumb className="card">
        {clickable ? (<Link to={`/${movieId}`}><img className="clickable" src={image} alt="MovieThumb"/></Link>) : (<img src={image} alt="MovieThumb"/>)}
    </StyledMovieThumb>
)

export default MovieThumb;
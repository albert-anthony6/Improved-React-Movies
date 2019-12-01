import React, {useState} from 'react';
import Grid from '../elements/Grid';
import MovieThumb from '../elements/MovieThumb';
import NoImage from '../images/no_image.jpg';
import {
    IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE
} from '../../config';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const hr={
    border: "0",
    height: "2px",
    backgroundImage: "radial-gradient(circle, rgba(210, 208, 208, 0.190914) 0%, rgba(210, 208, 208, 0) 90%)",
}

const ItemSlider = ({state, header}) => {
    const [index, setIndex] = useState(0);
    var imgUrls = [];

    const goToPrevSlide = () => {
        if(index === 0){
            return setIndex(imgUrls.length - 8);
        }
        setIndex(index - 1);
    }
    const goToNextSlide = () => {
        // if(index === imgUrls.length - 1){
        //     return setIndex(0);
        // }

        if(index === imgUrls.length - 8){
            return setIndex(0);
        }

        setIndex(index + 1);
    }
    return(
        <React.Fragment>
            <Grid header={header} className="col">                
                <div>
                    {state.heroImage.map(image => {
                        imgUrls.push(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.backdrop_path}`);
                    })}
                    
                    <div className="slide-wrapper" style={{
                        transform: `translateX(-${index * (100/imgUrls.length)}%)`
                    }}>
                        {state.movies.map(movie => (
                            <MovieThumb //Children
                                key={movie.id}
                                clickable
                                image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
                                movieId={movie.id}
                                movieName={movie.original_title}
                            />
                        ))}
                    </div>
                </div>
                <LeftArrow className="backArrow arrow" goToPrevSlide={goToPrevSlide}/>
                <RightArrow className="nextArrow arrow" goToNextSlide={goToNextSlide}/>
            </Grid>
            <hr style={hr}></hr>
        </React.Fragment>
    )
}

export default ItemSlider;
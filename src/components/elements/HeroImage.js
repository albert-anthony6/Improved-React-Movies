import React, {useState} from 'react';
import {StyledHeroImage} from '../styles/StyledHeroImage';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroImage = ({state}) => {
    const [index, setIndex] = useState(0);
    const [translateValue, setTranslateValue] = useState(0);

    const goToPrevSlide = () => {
        if(index === 1){
            return setIndex(0), setTranslateValue(0);
        }
        if(index === 0){
            return setTranslateValue(translateValue + backSlideWidth() /*+ -4*/), setIndex(state.heroImage.length - 1), setTranslateValue(translateValue + (slideWidth() + .2) * -(state.heroImage.length - 1));
        }
        setIndex(index - 1);
        setTranslateValue(translateValue + (slideWidth() + .2));
    }
    const goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(index === state.heroImage.length - 1){
            return setIndex(0), setTranslateValue(0);
        }

        //This will not run if we met the if condition above
        setIndex(index + 1);
        setTranslateValue(translateValue + (-(slideWidth()) + -.2));
    }

    const backSlideWidth = () => {
        return (document.querySelector(".slide").clientWidth*-19/*.00301*/);
    }

    const slideWidth = () => {
        return document.querySelector(".slide").clientWidth
    }
    return(
        <React.Fragment>
            <StyledHeroImage>
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${translateValue}px)`,
                        transition: 'transform ease-out 0.45s',
                    }}>
                    {state.heroImage.map((image, i) => (
                        <Slide key={i} title={image.original_title} text={image.overview} image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.backdrop_path}`}/>
                    ))}
                </div>

                <LeftArrow goToPrevSlide={goToPrevSlide}/>
                <RightArrow goToNextSlide={goToNextSlide}/>
            </StyledHeroImage>
        </React.Fragment>
    )
}

export default HeroImage;
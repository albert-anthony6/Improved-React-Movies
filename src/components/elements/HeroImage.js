import React, {useState} from 'react';
import {StyledHeroImage} from '../styles/StyledHeroImage';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroImage = ({state}) => {
    const [index, setIndex] = useState(0);
    var imgUrls = [];

    const goToPrevSlide = () => {
        if(index === 0){
            return setIndex(imgUrls.length - 1);
        }
        setIndex(index - 1);
    }
    const goToNextSlide = () => {
        if(index === imgUrls.length - 1){
            return setIndex(0);
        }

        setIndex(index + 1);
    }
    return(
        <React.Fragment>
            <StyledHeroImage>
                {state.heroImage.map(image => {
                    imgUrls.push(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.backdrop_path}`);
                })}
                <Slide title={state.heroImage[index].original_title} text={state.heroImage[index].overview} image={imgUrls[index]}/>

                <LeftArrow goToPrevSlide={goToPrevSlide}/>
                <RightArrow goToNextSlide={goToNextSlide}/>
            </StyledHeroImage>
        </React.Fragment>
    )
}

export default HeroImage;
import React, {useState} from 'react';
import {StyledHeroImage} from '../styles/StyledHeroImage';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const HeroImage = ({state}) => {
    const [index, setIndex] = useState(0);
    // const [translateValue, setTranslateValue] = useState(0);
    var imgUrls = [
	// "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781", 
	// "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
	// "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
	// "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
	// "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
];

    const goToPrevSlide = () => {
        // if(index === 1){
        //     return setIndex(0), setTranslateValue(0);
        // }
        if(index === 0){
            return setIndex(imgUrls.length - 1);
            // return setTranslateValue(translateValue + backSlideWidth() /*+ -4*/), setIndex(state.heroImage.length - 1), setTranslateValue(translateValue + (slideWidth() + .2) * -(state.heroImage.length - 1));
        }
        setIndex(index - 1);
        // setTranslateValue(translateValue + (slideWidth() + .2));
    }
    const goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(index === imgUrls.length/*state.heroImage.length*/ - 1){
            return setIndex(0);
            // return setIndex(0), setTranslateValue(0);
        }

        //This will not run if we met the if condition above
        setIndex(index + 1);
        // setTranslateValue(translateValue + (-(slideWidth()) + -.2));
    }

    // const backSlideWidth = () => {
    //     return (document.querySelector(".slide").clientWidth*-19/*.00301*/);
    // }

    // const slideWidth = () => {
    //     return document.querySelector(".slide").clientWidth
    // }
    return(
        <React.Fragment>
            <StyledHeroImage>
                <div className="slider-wrapper"
                    // style={{
                    //     transform: `translateX(${translateValue}px)`,
                    //     transition: 'transform ease-out 0.45s',
                    // }}
                    >
                        {state.heroImage.map(image => {
                            imgUrls.push(`${IMAGE_BASE_URL}${BACKDROP_SIZE}${image.backdrop_path}`);
                        })}
                        <Slide title={state.heroImage[index].original_title} text={state.heroImage[index].overview} image={imgUrls[index]}/>
                </div>

                <LeftArrow goToPrevSlide={goToPrevSlide}/>
                <RightArrow goToNextSlide={goToNextSlide}/>
            </StyledHeroImage>
        </React.Fragment>
    )
}

export default HeroImage;
import React from 'react';

const Slide = ({image, text, title}) => {
    const styles = {
        background: `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%',
    }
    return(
    <div className="slide" style={styles}>
        <div className="heroimage-content">
            <div className="heroimage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </div>     
    )
}

export default Slide;
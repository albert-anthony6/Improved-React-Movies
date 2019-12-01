import styled from 'styled-components';

export const StyledItemSlider = styled.div`
    height: 264px;
    position: relative;

    &::before,
    &::after{
        content: '';
        width: 10%;
        height: 120%;
        background: linear-gradient(to right, #222849 100%, rgba(255, 255, 255, 0));
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    &::after{
        left: auto;
        right: 0;
        background: linear-gradient(to left, #222849 100%, rgba(255, 255, 255, 0));
    }

    .slide-wrapper{
        display: flex;
        position: absolute;
        transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

        .card{
            flex: 1;
            min-width: 175px;
        }
    }

    .gallery{
        // position: relative;
        max-width: 1280px;
        margin: 0 auto;
    }

    .arrow{
        height: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f9f9f9;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        z-index: 999;
    }
    .backArrow{
        position: absolute;
        top: 40%;
        left: 100px;
        z-index: 999;
    }
    .nextArrow{
        position: absolute;
        top: 40%;
        right: 100px;
        z-index: 999;
    }

    // &:after{
    //     content: '';
    //     display: block;
    //     width: 100%:
    //     height: 264px;
    //     outline: 5px solid red;
    //     position: absolute;
    //     top: 0;
    //     left: 0;
    // }
    // max-width: 1280px;
    // margin: 0 auto;
    // padding: 0 20px;
    h1 {
        font-family: 'Alegreya Sans', sans-serif;
        font-size: 20px;
        color: #fff;
        letter-spacing: 3px;
        margin: 2% 0 1.5% 11.6%;
        text-transform: uppercase;

        @media screen and (max-width: 768px) {
            font-size: 22px;
        }
    }
`;

export const StyledGridContent = styled.div`
    // display: grid;
    // grid-template-columns: repeat(5, minmax(100px, 1fr));
    // grid-gap: 40px;
    // position: relative;

    // .grid-element {
    //     animation: animateGrid 0.5s;
    // }

    // @keyframes animateGrid {
    //     from {
    //     opacity: 0;
    //     }
    //     to {
    //     opacity: 1;
    //     }
    // }

    // @media screen and (max-width: 1024px) {
    //     grid-template-columns: repeat(4, minmax(100px, 1fr));
    // }

    // @media screen and (max-width: 768px) {
    //     grid-template-columns: repeat(3, minmax(100px, 1fr));
    // }

    // @media screen and (max-width: 600px) {
    //     grid-template-columns: repeat(2, minmax(100px, 1fr));
    // }

    // @media screen and (max-width: 375px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

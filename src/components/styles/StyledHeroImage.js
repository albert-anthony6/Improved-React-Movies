import styled from 'styled-components';

export const StyledHeroImage = styled.div`
    height: 650px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    animation: animateHeroimage 1s;

    .heroimage-content {
        max-width: 1280px;
        padding: 20px;
        margin: 0 auto;
      }
    
      .heroimage-text {
        z-index: 999;
        max-width: 700px;
        min-width: 700px;
        position: absolute;
        bottom: 40px;
        margin-right: 20px;
        min-height: 100px;
        background: rgba(0, 0, 0, 0);
        color: #fff;
    
        h1 {
          font-family: 'Abel', sans-serif;
          font-size: 48px;
          color: #fff;
    
          @media screen and (max-width: 720px) {
            font-size: 38px;
            color: #fff;
          }
        }
    
        p {
          font-family: 'Abel', sans-serif;
          font-size: 22px;
          line-height: 26px;
          color: #fff;
    
          @media screen and (max-width: 720px) {
            font-size: 16px;
            line-height: 20px;
            color: #fff;
          }
        }
    
        @media screen and (max-width: 720px) {
          max-width: 400px;
          min-width: 400px;
        }
    }

      .heroimage-text p, .heroimage-text h1{
        white-space: normal;
      }

    .slider-wrapper{
        position: relative;
        height: 100%;
        width: 100%;
    }

    .slide{
        display: inline-block;
        width: 100%;
        height: 100%;
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
        transition: transform ease-in .1s;
    }
    
    .nextArrow {
        position: absolute;
        top: 50%;
        right: 25px;
        z-index: 999;
        color: #fff;
      }
      
      .backArrow {
        position: absolute;
        top: 50%;
        left: 25px;
        z-index: 999;
        color: #fff;
      }
    
      .fa-arrow-right:before, .fa-arrow-left:before {
        color: #222
      }

      @keyframes animateHeroimage {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
`;
import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    width: auto;
    height: 190px;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0.8;

    :hover {
      opacity: 1;
      transform: scale(1.1);
      transition: transform ease-out .2s;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;

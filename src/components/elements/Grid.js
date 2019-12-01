import React from 'react';

import {StyledItemSlider, StyledGridContent} from '../styles/StyledItemSlider';

const Grid = ({header, children}) => (
    <StyledItemSlider>
        <h1>{header}</h1>
        <StyledGridContent>{children}</StyledGridContent>
    </StyledItemSlider>
)

export default Grid;
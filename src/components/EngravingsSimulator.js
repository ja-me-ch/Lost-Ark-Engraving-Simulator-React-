import React from 'react';
import EngravingsAccessory from './EngravingsAccessory';
import EngravingsDisplay from './EngravingsDisplay';
import { EngravingProvider } from '../contexts/EngravingSimulatorContext';

import { styled } from '@mui/material/styles'

const RootStyle = styled('div')((props) => ({
    maxWidth: '1080px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

//includes everything about the engraving simulator, the display, the selectors, and functions
function EngravingsSimulator() {
    return (
        <RootStyle>
            <EngravingProvider>
                <h1>Lost Ark Engraving Simulator</h1>
                <EngravingsAccessory />
                <EngravingsDisplay />
            </EngravingProvider>
        </RootStyle >
    )
}

export default EngravingsSimulator

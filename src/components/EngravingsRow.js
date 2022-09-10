import React from 'react';
import { styled } from '@mui/material/styles';

//filled &#11201;
//unfilled &#9671;
//1000px x 650px
//675px x 80px
const EngravingText = styled('div')((props) => ({
    display: 'flex',
    justifyContent: 'space-between'
}));
const EngravingTitle = styled('div')((props) => ({
    fontSize: '1.8rem'
}));

const OverlevelText = styled('div')((props) => ({
    color: 'red',
    fontSize: '1.8rem'
}));

const DiamondNodes = styled('div')((props) => ({
    color: props.negative ? 'red' : 'rgb(34, 166, 255)',
    fontSize: '1.8rem',
    'span:nth-of-type(5)': {
        marginRight: '0.8rem'
    },
    'span:nth-of-type(10)': {
        marginRight: '0.8rem'
    }
}));

function EngravingsRow(props) {
    const { en, lvl } = props;
    let negative = false;
    let overLvl = 0;
    let enLvl = 0;

    if (lvl > 15) {
        overLvl = lvl - 15;
        enLvl = 3
    }
    else {
        enLvl = Math.floor(lvl / 5);
    }
    if (RegExp(/Reduction/).test(en)) { negative = true; }

    const filledNode = (<span>&#11201;</span>)
    const unfilledNode = (<span style={{ fontSize: '1.92rem', color: 'rgba(128, 128, 128, 0.8)' }}>&#9671;</span>)

    const nodeElements = [];

    //if lvl is above 15 just render 15 filled diamond nodes
    if (lvl > 15) {
        for (let j = 0; j < 15; j++) {
            nodeElements.push(<span key={`${en}-${j}-lvl`}>
                &#11201;
            </span>)
        }
    }

    //
    else {
        for (let i = 0; i < 15; i++) {
            if (lvl > i) {
                nodeElements.push(
                    <span key={`${en}-${i}-lvl`}>
                        &#11201;
                    </span>
                );
            }
            else {
                nodeElements.push(
                    <span key={`${en}-${i}-lvl`} style={{ fontSize: '1.92rem', color: 'rgba(128, 128, 128, 0.8)' }}>
                        &#9671;
                    </span>
                );
            }
        }
    }

    return (
        <>
            <EngravingText >
                <EngravingTitle>
                    {en} Lv. {enLvl}
                </EngravingTitle>
                {overLvl > 0 ? <OverlevelText>
                    +{overLvl}
                </OverlevelText> : null}
            </EngravingText>
            <DiamondNodes negative={negative}>
                {nodeElements}
            </DiamondNodes>
        </>
    )
}

export default EngravingsRow;

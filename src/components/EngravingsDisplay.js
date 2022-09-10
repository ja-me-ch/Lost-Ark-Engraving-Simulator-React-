import React, { useContext } from 'react';
import EngravingsRow from './EngravingsRow';
import { EngravingContext } from '../contexts/EngravingSimulatorContext';

//Displays all the selected engravings and their levels
function EngravingsDisplay() {
    const { accessoryValues } = useContext(EngravingContext);
    const engravings = [];
    const slotNames = [];

    for (const slot in accessoryValues) {
        slotNames.push(slot);
    }

    for (let i = 0; i < slotNames.length; i++) {
        const enLines = [];
        for (const enLine in accessoryValues[slotNames[i]]) {
            enLines.push(enLine);
        }
        for (let j = 0; j < enLines.length; j++) {
            if (accessoryValues[slotNames[i]][enLines[j]].lvl > 0) {
                if (engravings[accessoryValues[slotNames[i]][enLines[j]].en] === undefined) {
                    engravings[accessoryValues[slotNames[i]][enLines[j]].en] = accessoryValues[slotNames[i]][enLines[j]].lvl;
                }
                else {
                    engravings[accessoryValues[slotNames[i]][enLines[j]].en] += accessoryValues[slotNames[i]][enLines[j]].lvl;
                }
            }
        }
    }

    const keys = Object.keys(engravings);
    const values = Object.values(engravings);

    const engravingsArray = [];
    const negativeEngravingsArray = [];

    if (keys.length > 0) {
        for (let i = 0; i < keys.length; i++) {
            if (RegExp(/Reduction/).test(keys[i])) {
                negativeEngravingsArray.push(
                    <EngravingsRow
                        key={`${keys[i]}-${values[i]}`}
                        en={keys[i]}
                        lvl={values[i]}
                    />
                )
            }
            else {
                engravingsArray.push(
                    <EngravingsRow
                        key={`${keys[i]}-${values[i]}`}
                        en={keys[i]}
                        lvl={values[i]}
                    />
                );
            }
        }
    }

    negativeEngravingsArray.sort((a, b) => {
        return b.props.lvl - a.props.lvl;
    });

    engravingsArray.sort((a, b) => {
        return b.props.lvl - a.props.lvl;
    });

    engravingsArray.push(...negativeEngravingsArray);

    return (
        <div>
            {engravingsArray}
        </div>
    )
}

export default EngravingsDisplay

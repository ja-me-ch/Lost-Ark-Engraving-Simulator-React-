import React, { useEffect, useContext } from 'react';
import { Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import { EngravingContext } from '../contexts/EngravingSimulatorContext';
import { SelectStyle } from './AccessorySelector';

import AccessorySelector from './AccessorySelector';

const RootStyle = styled('div')((props) => ({
    margin: '0rem 1rem 2rem 1rem'
}));

const GroupSelectors = styled('div')((props) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}));

const EngravingGroup = styled('div')((props) => ({
    color: 'rgb(249, 249, 249)',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px'
}));

const SlotTitleStyle = styled('h3')((props) => ({
    fontSize: '1rem',
    marginBottom: '3px',
    marginLeft: '10px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px'
}))

function EngravingsAccessory() {
    const { classData, accessoryValues, engravingLists } = useContext(EngravingContext);

    useEffect(() => {
        const slotNames = [];
        const enLines = ['en1', 'en2'];
        for (const slot in accessoryValues) {
            slotNames.push(slot);
        }

        //for every slot and every en1 and en2 in those slots replace it with classBattle()[0] 
        //if the currently selected engraving is not in the classBattle() list aka an invalid selection
        for (let i = 0; i < slotNames.length; i++) {
            for (let j = 0; j < enLines.length; j++) {
                if (!engravingLists.classBattle().includes(accessoryValues[slotNames[i]][enLines[j]].en)) {
                    accessoryValues[slotNames[i]][enLines[j]].setEn(engravingLists.classBattle()[0]);
                    accessoryValues[slotNames[i]][enLines[j]].setLvl(0);
                }
            }
        }
    }, [classData.selectedClass])

    let classMenuItems = [];
    for (let i = 0; i < engravingLists.classEn.length; i++) {
        classMenuItems.push(
            <MenuItem
                value={engravingLists.classEn[i].class}
                key={engravingLists.classEn[i].class}
            >
                {engravingLists.classEn[i].class}
            </MenuItem>
        )
    }

    return (
        <RootStyle>
            <GroupSelectors>
                <EngravingGroup>
                    <SlotTitleStyle>Class</SlotTitleStyle>
                    <SelectStyle value={classData.selectedClass} auto={'true'} onChange={(e) => {
                        classData.changeSelectedClass(e.target.value);
                    }}>
                        {classMenuItems}
                    </SelectStyle>
                </EngravingGroup>
                <EngravingGroup>
                    <SlotTitleStyle>Equipped Engraving</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'een'}
                        accessory={accessoryValues.equipped_en}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>
            </GroupSelectors>
            <GroupSelectors>
                <EngravingGroup>
                    <SlotTitleStyle>Necklace</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'necklace'}
                        accessory={accessoryValues.necklace}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

                <EngravingGroup>
                    <SlotTitleStyle>Earring 1</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'earring1'}
                        accessory={accessoryValues.earring1}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

                <EngravingGroup>
                    <SlotTitleStyle>Earring 2</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'earring2'}
                        accessory={accessoryValues.earring2}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

                <EngravingGroup>
                    <SlotTitleStyle>Ring 1</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'ring1'}
                        accessory={accessoryValues.ring1}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

                <EngravingGroup>
                    <SlotTitleStyle>Ring 2</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'ring2'}
                        accessory={accessoryValues.ring2}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

                <EngravingGroup>
                    <SlotTitleStyle>Ability Stone</SlotTitleStyle>
                    <AccessorySelector
                        accessoryType={'abilityStone'}
                        accessory={accessoryValues.abilityStone}
                        engravingLists={engravingLists}
                    />
                </EngravingGroup>

            </GroupSelectors>
        </RootStyle>
    )
}

const SelectorRow = styled('div')((props) => ({

}))

export default EngravingsAccessory;





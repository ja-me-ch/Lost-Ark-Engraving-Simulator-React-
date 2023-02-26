import React from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import { v4 as uuid } from 'uuid';
// import battleEngravings from '../engravings/battleEngravings';
import { styled } from '@mui/material/styles';

const EngravingAndLevel = styled('div')((props) => ({
    display: 'flex'
}));

export const SelectStyle = styled(Select)((props) => ({
    color: 'rgb(249, 249, 249)',
    width: props.small ? 'auto' : (props.auto ? 'auto' : '210px'),
    maxWidth: props.autoSize ? 'auto' : '210px'
}));

function AccessorySelector(props) {
    const { accessoryType, accessory } = props;

    //classBattle is a callback functions that return arrays
    const { battle, classBattle, negative } = props.engravingLists;

    function getEngravingList(isNeg) {
        let selectedEngravingList = []

        if (isNeg === true) {
            selectedEngravingList = negative;
        }

        else if (accessoryType === 'abilityStone') {
            selectedEngravingList = battle;
        }

        else {
            selectedEngravingList = classBattle();
        }

        let engravingMenuItems = [];

        for (let i = 0; i < selectedEngravingList.length; i++) {
            engravingMenuItems.push(
                <MenuItem
                    value={selectedEngravingList[i]}
                    key={`${accessoryType}-${selectedEngravingList}-${uuid()}`}
                >
                    {selectedEngravingList[i]}
                </MenuItem>
            )
        }
        return engravingMenuItems;
    }

    function getLevelMenuItems(isNeg) {
        let selectedMaxLvl = 5;
        let selectedIncrement = 1;

        if (accessoryType === 'een') {
            selectedMaxLvl = 12;
            selectedIncrement = 3;
        }

        else if (accessoryType === 'abilityStone') {
            selectedMaxLvl = 10;
        }

        else if (isNeg === true && accessoryType !== 'abilityStone') {
            selectedMaxLvl = 3;
        }
        else {
            selectedMaxLvl = 5;
        }

        let levelMenuItems = [];
        for (let i = 0; i <= selectedMaxLvl; i += selectedIncrement) {
            levelMenuItems.push(
                <MenuItem value={i} key={`${accessoryType}-${i}-${uuid()}`}>{i}</MenuItem>
            )
        }
        return levelMenuItems;
    }

    function checkIfValid(valueState) {
        if (!classBattle().includes(valueState)) {
            return battle[0];
        }
        return valueState;
    }

    return (
        <div>
            <EngravingAndLevel>
                <FormControl size='small'>
                    <SelectStyle value={checkIfValid(accessory.en1.en)} onChange={(e) => {
                        accessory.en1.setEn(e.target.value);
                    }}>
                        {getEngravingList()}
                    </SelectStyle>
                </FormControl>
                <FormControl size='small'>
                    <SelectStyle value={accessory.en1.lvl} small={'true'} onChange={(e) => {
                        accessory.en1.setLvl(e.target.value);
                    }}>
                        {getLevelMenuItems()}
                    </SelectStyle>
                </FormControl>
            </EngravingAndLevel>
            <EngravingAndLevel>
                <FormControl size='small'>
                    <SelectStyle value={checkIfValid(accessory.en2.en)} onChange={(e) => {
                        accessory.en2.setEn(e.target.value);
                    }}>
                        {getEngravingList()}
                    </SelectStyle>
                </FormControl>
                <FormControl size='small'>
                    <SelectStyle value={accessory.en2.lvl} small={'true'} onChange={(e) => {
                        accessory.en2.setLvl(e.target.value);
                    }}>
                        {getLevelMenuItems()}
                    </SelectStyle>
                </FormControl>
            </EngravingAndLevel>
            {accessoryType !== 'een' ? (<EngravingAndLevel>
                <FormControl size='small'>
                    <SelectStyle value={accessory.neg.en} onChange={(e) => {
                        accessory.neg.setEn(e.target.value);
                    }}>
                        {getEngravingList(true)}
                    </SelectStyle>
                </FormControl>
                <FormControl size='small'>
                    <SelectStyle value={accessory.neg.lvl} small={'true'} onChange={(e) => {
                        accessory.neg.setLvl(e.target.value);
                    }}>
                        {getLevelMenuItems(true)}
                    </SelectStyle>
                </FormControl>
            </EngravingAndLevel>) : null}

        </div>
    )
}

export default AccessorySelector;

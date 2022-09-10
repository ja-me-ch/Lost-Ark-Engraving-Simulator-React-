// import React, { createContext, useState } from 'react';

// export const EngravingContext = createContext();

// export function LanguageProvider(props) {
//     const [language, setLanguage] = useState('en');
//     const changeLanguage = e => {
//         setLanguage(e.target.value);
//     }

//     return (
//         <LanguageContext.Provider value={{ language, changeLanguage }}>
//             {props.children};
//         </LanguageContext.Provider>
//     )
// }

import React, { createContext, useState } from 'react';
import classEngravings from '../engravings/classEngravings';
import battleEngravings from '../engravings/battleEngravings';

export const EngravingContext = createContext();

export function EngravingProvider(props) {
    const [selectedClass, setSelectedClass] = useState('Berserker');
    const changeSelectedClass = function (e) {
        setSelectedClass(e);
    }

    const classData = { selectedClass, changeSelectedClass }

    const getEngravingList = function (e) {
        let selectedClassEngravings = classEngravings.find(e => e.class === selectedClass).engravings;
        let combinedEngravingList = selectedClassEngravings.concat(battleEngravings);
        return combinedEngravingList;
    }

    const getNegativeEngravingList = function (e) {
        const negativeEngravings = [
            'Atk. Speed Reduction',
            'Atk. Power Reduction',
            'Defense Reduction',
            'Move Speed Reduction'
        ]
        return negativeEngravings;
    }

    const engravingLists = {
        battle: battleEngravings,
        classEn: classEngravings,
        classBattle: getEngravingList,
        negative: getNegativeEngravingList
    }

    //necklace
    const [necklace_en1, setNecklace_en1] = useState(getEngravingList()[0]);
    const [necklace_en1_lvl, setNecklace_en1_lvl] = useState(0);
    const [necklace_en2, setNecklace_en2] = useState(getEngravingList()[0]);
    const [necklace_en2_lvl, setNecklace_en2_lvl] = useState(0);
    const [necklace_negative, setNecklace_negative] = useState(getNegativeEngravingList()[0]);
    const [necklace_negative_lvl, setNecklace_negative_lvl] = useState(0);

    //earring1
    const [earring1_en1, setEarring1_en1] = useState(getEngravingList()[0]);
    const [earring1_en1_lvl, setEarring1_en1_lvl] = useState(0);
    const [earring1_en2, setEarring1_en2] = useState(getEngravingList()[0]);
    const [earring1_en2_lvl, setEarring1_en2_lvl] = useState(0);
    const [earring1_negative, setEarring1_negative] = useState(getNegativeEngravingList()[0]);
    const [earring1_negative_lvl, setEarring1_negative_lvl] = useState(0);

    //earring2
    const [earring2_en1, setEarring2_en1] = useState(getEngravingList()[0]);
    const [earring2_en1_lvl, setEarring2_en1_lvl] = useState(0);
    const [earring2_en2, setEarring2_en2] = useState(getEngravingList()[0]);
    const [earring2_en2_lvl, setEarring2_en2_lvl] = useState(0);
    const [earring2_negative, setEarring2_negative] = useState(getNegativeEngravingList()[0]);
    const [earring2_negative_lvl, setEarring2_negative_lvl] = useState(0);

    //ring1
    const [ring1_en1, setRing1_en1] = useState(getEngravingList()[0]);
    const [ring1_en1_lvl, setRing1_en1_lvl] = useState(0);
    const [ring1_en2, setRing1_en2] = useState(getEngravingList()[0]);
    const [ring1_en2_lvl, setRing1_en2_lvl] = useState(0);
    const [ring1_negative, setRing1_negative] = useState(getNegativeEngravingList()[0]);
    const [ring1_negative_lvl, setRing1_negative_lvl] = useState(0);

    //ring2
    const [ring2_en1, setRing2_en1] = useState(getEngravingList()[0]);
    const [ring2_en1_lvl, setRing2_en1_lvl] = useState(0);
    const [ring2_en2, setRing2_en2] = useState(getEngravingList()[0]);
    const [ring2_en2_lvl, setRing2_en2_lvl] = useState(0);
    const [ring2_negative, setRing2_negative] = useState(getNegativeEngravingList()[0]);
    const [ring2_negative_lvl, setRing2_negative_lvl] = useState(0);

    //ability stone
    const [abilityStone_en1, setAbilityStone_en1] = useState(battleEngravings[0]);
    const [abilityStone_en1_lvl, setAbilityStone_en1_lvl] = useState(0);
    const [abilityStone_en2, setAbilityStone_en2] = useState(battleEngravings[0]);
    const [abilityStone_en2_lvl, setAbilityStone_en2_lvl] = useState(0);
    const [abilityStone_neg, setAbiltyStone_neg] = useState(getNegativeEngravingList()[0]);
    const [abilityStone_neg_lvl, setAbilityStone_neg_lvl] = useState(0)

    //equipped engravings
    const [een1, setEen1] = useState(getEngravingList()[0]);
    const [een1_lvl, setEen1_lvl] = useState(0);
    const [een2, setEen2] = useState(getEngravingList()[0]);
    const [een2_lvl, setEen2_lvl] = useState(0);

    const accessoryValues = {
        equipped_en: {
            en1: {
                en: een1,
                lvl: een1_lvl,
                setEn: setEen1,
                setLvl: setEen1_lvl
            },
            en2: {
                en: een2,
                lvl: een2_lvl,
                setEn: setEen2,
                setLvl: setEen2_lvl
            }
        },
        necklace: {
            en1: {
                en: necklace_en1,
                lvl: necklace_en1_lvl,
                setEn: setNecklace_en1,
                setLvl: setNecklace_en1_lvl
            },
            en2: {
                en: necklace_en2,
                lvl: necklace_en2_lvl,
                setEn: setNecklace_en2,
                setLvl: setNecklace_en2_lvl
            },
            neg: {
                en: necklace_negative,
                lvl: necklace_negative_lvl,
                setEn: setNecklace_negative,
                setLvl: setNecklace_negative_lvl
            }
        },
        earring1: {
            en1: {
                en: earring1_en1,
                lvl: earring1_en1_lvl,
                setEn: setEarring1_en1,
                setLvl: setEarring1_en1_lvl
            },
            en2: {
                en: earring1_en2,
                lvl: earring1_en2_lvl,
                setEn: setEarring1_en2,
                setLvl: setEarring1_en2_lvl
            },
            neg: {
                en: earring1_negative,
                lvl: earring1_negative_lvl,
                setEn: setEarring1_negative,
                setLvl: setEarring1_negative_lvl
            }
        },
        earring2: {
            en1: {
                en: earring2_en1,
                lvl: earring2_en1_lvl,
                setEn: setEarring2_en1,
                setLvl: setEarring2_en1_lvl
            },
            en2: {
                en: earring2_en2,
                lvl: earring2_en2_lvl,
                setEn: setEarring2_en2,
                setLvl: setEarring2_en2_lvl
            },
            neg: {
                en: earring2_negative,
                lvl: earring2_negative_lvl,
                setEn: setEarring2_negative,
                setLvl: setEarring2_negative_lvl
            }
        },
        ring1: {
            en1: {
                en: ring1_en1,
                lvl: ring1_en1_lvl,
                setEn: setRing1_en1,
                setLvl: setRing1_en1_lvl
            },
            en2: {
                en: ring1_en2,
                lvl: ring1_en2_lvl,
                setEn: setRing1_en2,
                setLvl: setRing1_en2_lvl
            },
            neg: {
                en: ring1_negative,
                lvl: ring1_negative_lvl,
                setEn: setRing1_negative,
                setLvl: setRing1_negative_lvl
            }
        },
        ring2: {
            en1: {
                en: ring2_en1,
                lvl: ring2_en1_lvl,
                setEn: setRing2_en1,
                setLvl: setRing2_en1_lvl
            },
            en2: {
                en: ring2_en2,
                lvl: ring2_en2_lvl,
                setEn: setRing2_en2,
                setLvl: setRing2_en2_lvl
            },
            neg: {
                en: ring2_negative,
                lvl: ring2_negative_lvl,
                setEn: setRing2_negative,
                setLvl: setRing2_negative_lvl
            }
        },
        abilityStone: {
            en1: {
                en: abilityStone_en1,
                lvl: abilityStone_en1_lvl,
                setEn: setAbilityStone_en1,
                setLvl: setAbilityStone_en1_lvl
            },
            en2: {
                en: abilityStone_en2,
                lvl: abilityStone_en2_lvl,
                setEn: setAbilityStone_en2,
                setLvl: setAbilityStone_en2_lvl
            },
            neg: {
                en: abilityStone_neg,
                lvl: abilityStone_neg_lvl,
                setEn: setAbiltyStone_neg,
                setLvl: setAbilityStone_neg_lvl
            }
        }
    }

    return (
        <EngravingContext.Provider
            value={{ classData, engravingLists, accessoryValues }}
        >
            {props.children}
        </EngravingContext.Provider>
    )
}
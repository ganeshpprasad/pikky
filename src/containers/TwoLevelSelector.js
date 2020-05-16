import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Chatbutton} from '../components/chatbutton';
import PikkyMessageItem from '../components/PikkyMessageItem';

// styles
import {styles} from '../styles/userButtonStyle';

const options = [
    {
        name: 'Veg',
        isSelected: false,
        id: 1,
    },
    {
        name: 'Halal',
        isSelected: false,
        id: 2,
    },
    {
        name: 'Pescatarian',
        isSelected: false,
        id: 3,
    },
    {
        name: 'Vegan',
        isSelected: false,
        id: 4,
    },
    {
        name: 'Non-Veg',
        isSelected: false,
        id: 5,
    },
];

const secondOptions = [
    {
        name: 'Poultry',
        isSelected: false,
        typeId: [2, 5],
        id: 1,
    },
    {
        name: 'SeaFood',
        isSelected: false,
        typeId: [2, 5, 3],
        id: 2,
    },
    {
        name: 'Beef',
        isSelected: false,
        typeId: [2, 5],
        id: 3,
    },
    {
        name: 'Pork',
        isSelected: false,
        typeId: [5],
        id: 4,
    },
    {
        name: 'Lamb',
        isSelected: false,
        typeId: [2, 5],
        id: 4,
    },
    {
        name: 'Greek Salad',
        isSelected: false,
        typeId: [1],
        id: 5,
    },
    {
        name: 'Oats',
        isSelected: false,
        typeId: [1, 4],
        id: 6,
    },
];

const TwoLevelSelector = ({optionsArray, chatNextCallback}) => {
    const [topOptions, setTopOptions] = useState([...options]);
    const [bottomOptions, setBottomOptions] = useState([...secondOptions]);

    const _setTopOptions = (item, index) => {
        let _topOptions = [...topOptions];
        if (topOptions[index].isSelected) {
            _topOptions[index].isSelected = false;
        } else {
            _topOptions[index].isSelected = true;
        }
        // filter selected options and get onlu ids
        let selectedOptions = _topOptions
            .filter(i => i.isSelected)
            .map(i => i.id);

        const set = new Set();
        // loop selected options
        for (let i = 0; i < selectedOptions.length; i++) {
            // filter original secondOptions if typeId includes [i]
            const temp = secondOptions.filter(k =>
                k.typeId.includes(selectedOptions[i]),
            );
            console.log('se', temp);
            temp.map(j => set.add(j));
        }
        let _bottomOptions = Array.from(set);
        setBottomOptions([..._bottomOptions]);
        setTopOptions([..._topOptions]);
    };

    const _setBottomOptions = (item, index) => {
        let _bottomOptions = [...bottomOptions];
        if (bottomOptions[index].isSelected) {
            _bottomOptions[index].isSelected = false;
        } else {
            _bottomOptions[index].isSelected = true;
        }

        setBottomOptions([..._bottomOptions]);
    };

    const renderChatButtons = (item, id) => {
        const colorStyle = item.isSelected
            ? styles.submitCon
            : styles.cancelCon;

        return (
            <Chatbutton
                index={id}
                list={item}
                color={colorStyle}
                extraStyle={favPickerStyles.button}
                userButtonCallback={_setTopOptions}
            />
        );
    };

    const renderBottomOptions = (item, id) => {
        const colorStyle = item.isSelected
            ? styles.submitCon
            : styles.cancelCon;

        return (
            <Chatbutton
                index={id}
                list={item}
                color={colorStyle}
                extraStyle={favPickerStyles.button}
                userButtonCallback={_setBottomOptions}
            />
        );
    };

    let msg =
        'You can further choose from the following. Click on the above to change.';

    return (
        <>
            <View style={favPickerStyles.container}>
                {topOptions.map(renderChatButtons)}
                <PikkyMessageItem msg={msg} isWhiteMsg={true} />
                {bottomOptions.map(renderBottomOptions)}
            </View>
            <Chatbutton
                list={{name: 'Next'}}
                color={styles.submitCon}
                extraStyle={[favPickerStyles.button, favPickerStyles.righJust]}
                userButtonCallback={chatNextCallback}
            />
        </>
    );
};

export default TwoLevelSelector;

const favPickerStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    button: {
        width: '45%',
        // alignSelf: 'flex-end',
        marginTop: 10,
        marginLeft: 10,
    },
    righJust: {
        alignSelf: 'flex-end',
        marginRight: 10,
    },
});

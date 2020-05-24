import React, {useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

import {Chatbutton} from '../components/chatbutton';
import PikkyMessageItem from '../components/PikkyMessageItem';

import {insertFoodPreferences} from '../store/food/actions';

// styles
import {styles} from '../styles/userButtonStyle';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

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
        typeId: [2, 5],
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
];

const TwoLevelSelector = ({optionsArray, chatNextCallback}) => {
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

    const [topOptions, setTopOptions] = useState([...options]);
    const [bottomOptions, setBottomOptions] = useState([]);

    const _setTopOptions = (item, index) => {
        let _topOptions = [...options];
        console.log('_topOptions', _topOptions, bottomOptions);

        _topOptions[index].isSelected = true;
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

    const dispatch = useDispatch();
    const _insertFoodPreferences = useCallback(
        foodPref => dispatch(insertFoodPreferences(foodPref)),
        [dispatch],
    );
    let userState = useSelector(s => s.user);
    const _callback = () => {
        let category = bottomOptions.filter(j => j.isSelected).map(k => k.name);
        let _type = topOptions.filter(i => i.isSelected)[0];
        console.log('insert food pref', _type, category);
        let foodPref = {
            type: _type.name,
            category: category.length > 0 ? category : ['all'],
            name: userState.name,
        };
        console.log('foodPref', foodPref);
        _insertFoodPreferences(foodPref);
    };

    let foodState = useSelector(s => s.food);
    if (foodState.preferences) {
        console.log('foodState.preferences', foodState.preferences);

        chatNextCallback({msg: 'Preference Updated'});
    }

    return (
        <>
            <View style={favPickerStyles.container}>
                {topOptions.map(renderChatButtons)}
                {bottomOptions.length > 1 && (
                    <PikkyMessageItem msg={msg} isWhiteMsg={true} />
                )}
                {bottomOptions.map(renderBottomOptions)}
            </View>
            <Chatbutton
                list={{name: 'Next'}}
                color={styles.submitCon}
                extraStyle={[favPickerStyles.button, favPickerStyles.righJust]}
                userButtonCallback={() => _callback()}
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

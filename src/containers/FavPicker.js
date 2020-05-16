import React, {useState, useRef} from 'react';
import {View, StyleSheet} from 'react-native';

// helper
import {removeFromArray, removeIndexFromArray} from '../common/misc';

// components
import {Chatbutton} from '../components/chatbutton';
import ChatTextInput from '../components/chatTexInput';

// styles
import {styles} from '../styles/userButtonStyle';

const FavPicker = ({options, chatNextCallback}) => {
    const [selectedOptions, setSelectedOptions] = useState([...options]);
    const [textValue, setTextValue] = useState('');
    const textRef = useRef(null);

    const _setSelectedOptions = (item, index) => {
        let _selectedOptions = [...selectedOptions];
        if (index === undefined) {
            _selectedOptions.push(item);
            _setTextValue('');
        } else if (selectedOptions[index].isSelected) {
            _selectedOptions[index].isSelected = false;
        } else {
            _selectedOptions[index].isSelected = true;
        }
        setSelectedOptions([..._selectedOptions]);
    };

    const _setTextValue = value => setTextValue(value);

    const _onSubmitEditing = e => {
        if (textValue !== '') {
            _setSelectedOptions({name: textValue, isSelected: true});
            _setTextValue('');
        }
    };

    const checkBoxButtons = (item, id) => {
        const colorStyle = item.isSelected
            ? styles.submitCon
            : styles.cancelCon;
        return (
            <Chatbutton
                index={id}
                list={item}
                color={colorStyle}
                extraStyle={favPickerStyles.button}
                userButtonCallback={_setSelectedOptions}
            />
        );
    };

    return (
        <View style={favPickerStyles.container}>
            {selectedOptions.map(checkBoxButtons)}
            <ChatTextInput
                textRef={textRef}
                textValue={textValue}
                setText={_setTextValue}
                placeholder={'Add More'}
                onSubmitEditing={_onSubmitEditing}
                extraTextStyle={{marginTop: 10, width: '50%'}}
            />
            <Chatbutton
                list={{name: 'Next'}}
                color={styles.submitCon}
                extraStyle={favPickerStyles.button}
                userButtonCallback={chatNextCallback}
            />
        </View>
    );
};

export default FavPicker;

const favPickerStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 10,
        flexGrow: 1,
    },
    button: {
        width: '40%',
        alignSelf: 'flex-end',
        marginTop: 10,
    },
});

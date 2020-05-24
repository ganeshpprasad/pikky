import React, {useState, useRef, useCallback} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import debounce from 'lodash/debounce';

// helper
import {removeFromArray, removeIndexFromArray} from '../common/misc';
import {
    searchCuisine,
    saveBaseCuisine,
    saveFavCuisine,
} from '../store/food/actions';

// components
import {Chatbutton} from '../components/chatbutton';
import ChatTextInput from '../components/chatTexInput';

// styles
import {styles} from '../styles/userButtonStyle';

const FavPicker = ({chatNextCallback, isFav}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [textValue, setTextValue] = useState('');
    const textRef = useRef(null);

    let dispatch = useDispatch();
    let _searchCuisine = useCallback(
        searchTerm => {
            console.log('search cuisines');
            dispatch(searchCuisine(searchTerm));
        },
        [dispatch],
    );

    let _saveBaseCuisines = useCallback(() => {
        console.log('save base cuisines', selectedOptions);
        dispatch(saveBaseCuisine(selectedOptions));
    }, [dispatch, selectedOptions]);

    let _saveFavCuisines = useCallback(() => {
        console.log('save fav cuisines', selectedOptions);
        dispatch(saveFavCuisine(selectedOptions));
    }, [dispatch, selectedOptions]);

    const _setSelectedOptions = (item, index) => {
        let _selectedOptions = [...selectedOptions];
        // if (index === undefined) {
        _selectedOptions.push(item);
        _setTextValue('');
        // } else if (selectedOptions[index].isSelected) {
        // _selectedOptions[index].isSelected = false;
        // } else {
        // _selectedOptions[index].isSelected = true;
        // }
        setSelectedOptions([..._selectedOptions]);
    };

    const _setTextValue = value => {
        setTextValue(value);
        // debounce(() => _searchCuisine(value));
        _searchCuisine(value);
    };

    const _onSubmitEditing = item => {
        if (textValue !== '') {
            _setSelectedOptions({
                // TODO PLEASE PLEASE
                id: item.text,
                text: item.id,
                isSelected: true,
            });
            _setTextValue('');
        }
    };

    const CuisineItem = ({item}) => (
        <TouchableOpacity
            onPress={() => {
                console.log('loc', item);
                // userButtonCallback({id: 16});
                // _searchCuisine();
                _onSubmitEditing(item);
                // props.userButtonCallback(props.userMsg[0]);
            }}
            key={item.text}
            style={{padding: 6, marginBottom: 6}}>
            <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 15}}>
                {item.id}
            </Text>
        </TouchableOpacity>
    );

    let {searchResults} = useSelector(s => s.food);
    const LocationSelection = () => {
        if (!searchResults) {
            return null;
        }
        if (textValue.length < 1) {
            return null;
        }
        if (Object.keys(searchResults).length < 1) {
            return null;
        }
        if (
            searchResults &&
            searchResults.length < 1 &&
            searchResults.message
        ) {
            return null;
        }
        console.log('searchResults', searchResults);

        return (
            <FlatList
                keyboardShouldPersistTaps="handled"
                style={{backgroundColor: '#fff', padding: 10}}
                data={searchResults}
                renderItem={CuisineItem}
            />
        );
    };

    const checkBoxButtons = (item, id) => {
        const colorStyle = item.isSelected
            ? styles.submitCon
            : styles.cancelCon;
        return (
            <Chatbutton
                index={id}
                list={{...item, name: item.text}}
                color={colorStyle}
                extraStyle={favPickerStyles.button}
                // userButtonCallback={_setSelectedOptions}
            />
        );
    };

    const saveCuisines = () => {
        if (isFav) {
            _saveFavCuisines();
        } else {
            _saveBaseCuisines();
        }
        chatNextCallback();
    };

    return (
        <View style={favPickerStyles.container}>
            {selectedOptions.map(checkBoxButtons)}
            <ChatTextInput
                textRef={textRef}
                textValue={textValue}
                setText={_setTextValue}
                placeholder={'Add More'}
                // onSubmitEditing={}
                extraTextStyle={{marginTop: 10, width: '50%'}}
            />
            <Chatbutton
                list={{name: 'Next'}}
                color={styles.submitCon}
                extraStyle={favPickerStyles.button}
                userButtonCallback={saveCuisines}
            />
            {LocationSelection()}
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

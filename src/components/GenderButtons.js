import React, {useCallback} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {styles} from '../styles/userButtonStyle';
import {setGender} from '../store/user/actions';

const GenderButtons = props => {
    const dispatch = useDispatch();
    let _setGender = useCallback(gender => dispatch(setGender(gender)), [
        dispatch,
    ]);

    let userState = useSelector(s => s.user);

    if (userState.success && userState.gender) {
        props.userButtonCallback({msg: userState.gender});
    }

    let callGenderSet = gender => {
        setTimeout(() => _setGender(gender), 0);
    };

    return (
        <>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => _setGender('female')}>
                <Text style={styles.buttonText}>
                    {props.userMsg[0].display}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => _setGender('male')}>
                <Text style={styles.buttonText}>
                    {props.userMsg[1].display}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.chatButton, styles.genderButtons]}
                onPress={() => _setGender('others')}>
                <Text style={styles.buttonText}>
                    {props.userMsg[2].display}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default GenderButtons;

import React, {useRef, useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Text, TouchableOpacity} from 'react-native';

import ChatTextInput from '../components/chatTexInput';

import {styles} from '../styles/userButtonStyle';
import {insertUserName} from '../store/user/actions';

const UserNameInput = props => {
    const textRef = useRef(null);
    const [textValue, setTextValue] = useState('');
    const [isError, setisError] = useState('');
    // 'Username not available'
    // Username cannot be empty

    const _setTextValue = text => {
        // conditions for username
        const _text =
            text.indexOf('@') !== -1 ? text.slice(1, text.length) : text;
        setTextValue(_text);
        setisError('');
    };

    const dispatch = useDispatch();
    let _insertUserName = useCallback(
        userName => dispatch(insertUserName(userName)),
        [dispatch],
    );
    const _callback = () => {
        if (textValue.length < 1) {
            setisError('Username cannot be empty');
            return;
        }
        _insertUserName(textValue);
    };

    let userState = useSelector(s => s.user);
    if (userState.success === true) {
        props.userButtonCallback(props.userMsg[1]);
    } else if (userState.error === 'Unavailable') {
        setisError('Username not available');
    }

    const ErrorMsg = () => {
        if (isError.length > 0) {
            return <Text style={styles.errorMsgTxt}>{isError}</Text>;
        }
    };

    return (
        <>
            <>
                <ChatTextInput
                    autoFocus={true}
                    umsg={props.userMsg[0]}
                    textRef={textRef}
                    textValue={textValue.length > 0 ? '@' + textValue : ''}
                    setText={_setTextValue}
                    placeholder={'@username'}
                />
                {ErrorMsg()}
            </>
            <TouchableOpacity
                style={[
                    styles.chatButton,
                    styles.submitCon,
                    styles.centralButton,
                ]}
                onPress={_callback}>
                <Text style={styles.buttonText}>
                    {props.userMsg[1].display}
                </Text>
            </TouchableOpacity>
        </>
    );
};

export default UserNameInput;

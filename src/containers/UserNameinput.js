import React, {useRef, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import ChatTextInput from '../components/chatTexInput';

import {styles} from '../styles/userButtonStyle';

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

    const _callback = () => {
        if (textValue.length < 1) {
            setisError('Username cannot be empty');
            return;
        }
        props.userButtonCallback(props.userMsg[1]);
    };

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

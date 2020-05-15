import React, {useRef, useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import ChatTextInput from '../components/chatTexInput';

import {styles} from '../styles/userButtonStyle';

const PhoneNumberinput = props => {
    const textRef = useRef(null);
    const [textValue, setTextValue] = useState('');
    const [isError, setisError] = useState(false);

    const _setTextValue = text => {
        setTextValue(text);
        setisError('');
    };

    const _callback = () => {
        if (
            !textValue.match(
                /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
            )
        ) {
            setisError(true);
            return;
        }

        props.userButtonCallback(props.userMsg[1]);
    };

    const ErrorMsg = () => {
        if (isError) {
            return (
                <Text style={styles.errorMsgTxt}>
                    {'Phone number is invalid'}
                </Text>
            );
        }
    };

    return (
        <>
            <>
                <ChatTextInput
                    umsg={props.userMsg[0]}
                    textRef={textRef}
                    textValue={textValue}
                    setText={_setTextValue}
                    numericKeyboard={true}
                    pretext={'91+'}
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

export default PhoneNumberinput;

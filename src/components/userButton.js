import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Navigation} from 'react-native-navigation';
// import {View} from "react-native-animatable";

import {NAMES, USER_ACCCOUNT} from '../screens/constants';
import {styles} from '../styles/onBoardChat';

const UserButton = ({userMsg, componentId, setmsgNumber}) => {
    const [textValue, setText] = useState('');

    const navigateToNext = () => {
        Navigation.push(componentId, {
            component: {
                name: USER_ACCCOUNT,
                options: {
                    topBar: {
                        height: 0,
                        visible: false,
                    },
                },
            },
        });
    };

    const userButtonCallback = umsg => {
        const _id = umsg.id;
        setText('');
        _id === 8 ? navigateToNext(_id) : setmsgNumber(umsg);
    };

    // const savePhoneNumber = umsg => {
    //     umsg.msg = umsg.msg + ': ' + textValue;
    //     setmsgNumber(umsg);
    //     setText('');
    // };

    const decideButtonOrTextInput = (umsg, index) => {
        if (umsg.id === 6 || umsg.id === 10) {
            return (
                <View style={[styles.chatButton, styles.userText]}>
                    {umsg.id !== 10 ? <Text> {umsg.msg}</Text> : null}
                    <TextInput
                        style={styles.textInput}
                        value={textValue}
                        onChangeText={text => setText(text)}
                        placeholder={umsg.id === 10 ? umsg.display : null}
                    />
                </View>
            );
        }

        if (umsg.id === 8) {
            return (
                <View style={[styles.otpButtonCon]}>
                    <TextInput
                        style={styles.otpButton}
                        value={'0'}
                        // onChangeText={text => setText(text)}
                    />
                    <TextInput
                        style={styles.otpButton}
                        value={'0'}
                        // onChangeText={text => setText(text)}
                    />
                    <TextInput
                        style={styles.otpButton}
                        value={'0'}
                        // onChangeText={text => setText(text)}
                    />
                    <TextInput
                        style={[styles.otpButton, styles.otpButtonLast]}
                        value={'0'}
                        // onChangeText={text => setText(text)}
                    />
                </View>
            );
        }

        let color = index > 0 ? styles.submitCon : styles.cancelCon;
        if (umsg.id === 1) color = styles.skipButton;
        let colorText = index !== 1 ? styles.buttonText : styles.skipButtonText;
        let extraStyle =
            umsg.id === 7 || umsg.id === 9 || umsg.id === 11
                ? styles.centralButton
                : null;
        return (
            <TouchableOpacity
                // style={styles.userButton}
                style={[styles.chatButton, color, extraStyle]}
                onPress={() => userButtonCallback(umsg)}>
                <Text style={colorText}>{umsg.display}</Text>
            </TouchableOpacity>
        );
    };

    const returnUserMsg = (umsg, index) => (
        <>{decideButtonOrTextInput(umsg, index)}</>
    );

    return (
        <View
            style={
                userMsg[0].id === 6 ||
                userMsg[0].id === 8 ||
                userMsg[0].id === 10
                    ? styles.buttonsWithSubmit
                    : styles.buttonDefaultCon
            }>
            {userMsg.map(returnUserMsg)}
        </View>
    );
};

export default UserButton;

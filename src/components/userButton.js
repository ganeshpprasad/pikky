import React, {useState, useRef} from 'react';
import {View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
// import {Navigation} from 'react-native-navigation';
// import {View} from "react-native-animatable";

// import {NAMES, USER_ACCCOUNT} from '../screens/constants';
import {styles} from '../styles/onBoardChat';
import OTPbuttons from './OTPbuttons';

const UserButton = ({userMsg, componentId, setmsgNumber}) => {
    const [textValue, setText] = useState('');
    const textRef = useRef(null);

    // const navigateToNext = () => {
    //     Navigation.push(componentId, {
    //         component: {
    //             name: USER_ACCCOUNT,
    //             options: {
    //                 topBar: {
    //                     height: 0,
    //                     visible: false,
    //                 },
    //             },
    //         },
    //     });
    // };

    const userButtonCallback = umsg => {
        // const _id = umsg.id;
        // _id === 8 ? navigateToNext(_id) :
        setmsgNumber(umsg);
        setText('');
    };

    // const savePhoneNumber = umsg => {
    //     umsg.msg = umsg.msg + ': ' + textValue;
    //     setmsgNumber(umsg);
    //     setText('');
    // };

    const decideButtonOrTextInput = (umsg, index) => {
        if (umsg.id === 6 || umsg.id === 10 || umsg.id === 16) {
            const extraTextStyle =
                umsg.id === 16 ? styles.locationTextInput : null;

            return (
                <View
                    style={[
                        styles.chatButton,
                        styles.userText,
                        extraTextStyle,
                    ]}>
                    {umsg.id !== 10 && umsg.id !== 16 ? (
                        <Text> {umsg.msg}</Text>
                    ) : null}
                    <TextInput
                        ref={textRef}
                        autoFocus
                        style={styles.textInput}
                        value={textValue}
                        onChangeText={text => setText(text)}
                        placeholder={
                            umsg.id === 10 || umsg.id === 16
                                ? umsg.display
                                : null
                        }
                    />
                </View>
            );
        }

        if (umsg.id === 8) {
            return <OTPbuttons />;
        }

        let color = index > 0 ? styles.submitCon : styles.cancelCon;
        if (umsg.id === 1) color = styles.skipButton;
        let colorText = index !== 1 ? styles.buttonText : styles.skipButtonText;
        let extraStyle =
            umsg.id === 7 || umsg.id === 9 || umsg.id === 11
                ? styles.centralButton
                : umsg.id === 12 || umsg.id === 13 || umsg.id === 14
                ? styles.genderButtons
                : umsg.id === 15
                ? styles.locateButton
                : null;
        return (
            <TouchableOpacity
                // style={styles.userButton}
                style={[styles.chatButton, color, extraStyle]}
                onPress={() => userButtonCallback(umsg)}>
                {umsg.id === 15 ? (
                    <Image
                        source={require('../assets/onBoarding/locpin3.png')}
                        style={{paddingRight: 30}}
                        resizeMode="contain"
                    />
                ) : null}
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
                userMsg[0].id === 10 ||
                userMsg[0].id === 15
                    ? styles.buttonsWithSubmit
                    : styles.buttonDefaultCon
            }>
            {userMsg.map(returnUserMsg)}
        </View>
    );
};

export default UserButton;

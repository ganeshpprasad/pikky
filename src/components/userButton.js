import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
// import {View} from "react-native-animatable";

import {options, options2} from '../helperData/food';

// constants
import {USER_ACCCOUNT} from '../screens';

// components
import GenderButtons from './GenderButtons';
// containers
import FavPicker from '../containers/FavPicker';
import OTPbuttons from '../containers/OTPbuttons';
import LocationInput from '../containers/LocationInput';
import UserNameInput from '../containers/UserNameinput';
import PhoneNumberinput from '../containers/PhoneNumberinput';
import TwoLevelSelector from '../containers/TwoLevelSelector';
import SocialSigninButton from '../containers/SocialSigninButton';

import {styles} from '../styles/userButtonStyle';

const UserButton = ({userMsg, componentId, setmsgNumber, goto}) => {
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
        // if (umsg.id === 15 || umsg.id === 16) {
        // navigateToNext();
        // } else {
        setmsgNumber(umsg);
        // }
    };

    const decideButtonOrTextInput = (umsg, index) => {
        let color =
            index > 0
                ? styles.submitCon
                : umsg.id === 1
                ? styles.skipButton
                : styles.cancelCon;

        return (
            <>
                <TouchableOpacity
                    style={[
                        styles.chatButton,
                        color,
                        {alignSelf: 'flex-end', width: '40%'},
                    ]}
                    onPress={() => userButtonCallback(umsg)}>
                    <Text style={styles.buttonText}>{umsg.display}</Text>
                </TouchableOpacity>
            </>
        );
    };

    const returnUserMsg = (umsg, index) => (
        <>{decideButtonOrTextInput(umsg, index)}</>
    );

    if (userMsg[0].id === 4) {
        return (
            <View style={styles.buttonDefaultCon}>
                <SocialSigninButton
                    umsg={userMsg[0]}
                    color={styles.cancelCon}
                    userButtonCallback={i => goto(i)}
                />
                {/* <TouchableOpacity
                    style={[styles.chatButton, styles.cancelCon]}
                    onPress={() => userButtonCallback(userMsg[0])}>
                    <Text style={styles.buttonText}>{userMsg[0].display}</Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                    style={[styles.chatButton, styles.submitCon]}
                    onPress={() => userButtonCallback(userMsg[1])}>
                    <Text style={styles.buttonText}>{userMsg[1].display}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (userMsg[0].id === 6) {
        return (
            <View style={styles.buttonsWithSubmit}>
                <PhoneNumberinput
                    userMsg={userMsg}
                    userButtonCallback={userButtonCallback}
                />
            </View>
        );
    }

    if (userMsg[0].id === 8) {
        return (
            <View style={styles.buttonsWithSubmit}>
                <OTPbuttons />
                <TouchableOpacity
                    // style={styles.userButton}
                    style={[
                        styles.chatButton,
                        styles.submitCon,
                        styles.centralButton,
                    ]}
                    onPress={() => userButtonCallback(userMsg[1])}>
                    <Text style={styles.buttonText}>{userMsg[1].display}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (userMsg[0].id === 10) {
        return (
            <View style={styles.buttonsWithSubmit}>
                <UserNameInput
                    userMsg={userMsg}
                    userButtonCallback={userButtonCallback}
                />
            </View>
        );
    }

    if (userMsg[0].id === 12) {
        return (
            <View style={styles.buttonDefaultCon}>
                <GenderButtons
                    userMsg={userMsg}
                    userButtonCallback={userButtonCallback}
                />
            </View>
        );
    }

    if (userMsg[0].id === 15) {
        return (
            <View style={styles.buttonsForLocation}>
                <LocationInput
                    userMsg={userMsg}
                    userButtonCallback={userButtonCallback}
                />
            </View>
        );
    }

    if (userMsg[0].verticalList) {
        return (
            <FavPicker
                options={options}
                optionsArray={userMsg}
                chatNextCallback={userButtonCallback}
            />
        );
    }

    if (userMsg[0].isTwoStepSelect) {
        return (
            <TwoLevelSelector
                optionsArray={userMsg}
                chatNextCallback={userButtonCallback}
            />
        );
    }

    if (userMsg[0].id === 22) {
        return (
            <View style={styles.buttonsWithSubmit}>
                {userMsg.map(returnUserMsg)}
            </View>
        );
    }
    if (userMsg[0].id === 25) {
        return (
            <View style={styles.buttonsWithSubmit}>
                {userMsg.map(returnUserMsg)}
            </View>
        );
    }
    if (userMsg[0].id === 26) {
        return (
            <View style={styles.buttonsWithSubmit}>
                <TouchableOpacity
                    style={[
                        styles.chatButton,
                        styles.submitCon,
                        {alignSelf: 'flex-end', width: '40%'},
                    ]}
                    // onPress={() => userButtonCallback(userMsg[0])}
                >
                    <Text style={styles.buttonText}>{userMsg[0].display}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    if (userMsg[0].id === 24) {
        return (
            <FavPicker
                options={options2}
                optionsArray={userMsg}
                chatNextCallback={userButtonCallback}
            />
        );
    }

    return (
        <View style={styles.buttonDefaultCon}>
            {userMsg.map(returnUserMsg)}
        </View>
    );
};

export default UserButton;

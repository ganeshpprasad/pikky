import React, {useState} from "react";
import {Button, Text, TouchableWithoutFeedback, TextInput} from "react-native";
import {Navigation} from "react-native-navigation";
import {View} from "react-native-animatable";

import {NAMES, USER_ACCCOUNT} from "../screens/constants";
import {styles} from "../styles/onBoardChat";

const UserButton = ({userMsg, componentId, setmsgNumber}) => {
    const [textValue, setText] = useState("");

    const navigateToNext = id => {
        const screen = id === 4 ? NAMES : USER_ACCCOUNT;

        Navigation.push(componentId, {
            component: {
                name: screen,
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
        _id === 4 || _id === 8 ? navigateToNext(_id) : setmsgNumber(umsg);
    };

    const savePhoneNumber = umsg => {
        umsg.msg = umsg.msg + ": " + textValue;
        userButtonCallback(umsg);
        setText("");
    };

    const decideButtonOrTextInput = umsg => {
        if (umsg.id === 3 || umsg.id === 5 || umsg.id === 7) {
            return (
                <View animation={"bounceInUp"} style={styles.userText}>
                    <Text>{umsg.display}</Text>
                    <TextInput
                        style={styles.textInput}
                        value={textValue}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={() => savePhoneNumber(umsg)}
                    />
                </View>
            );
        }

        return (
            <View animation={"bounceInUp"} style={styles.buttonCon}>
                <TouchableWithoutFeedback
                    style={styles.userButton}
                    onPress={() => userButtonCallback(umsg)}>
                    <Text style={styles.buttonText}>{umsg.display}</Text>
                </TouchableWithoutFeedback>
            </View>
        );
    };

    const returnUserMsg = umsg => <>{decideButtonOrTextInput(umsg)}</>;

    return <>{userMsg.map(returnUserMsg)}</>;
};

export default UserButton;

import React, {useState} from "react";
import {
    View,
    Button,
    Text,
    TouchableWithoutFeedback,
    TextInput,
} from "react-native";
import {Navigation} from "react-native-navigation";

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
                <View style={styles.userText}>
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
            <View style={styles.buttonCon}>
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

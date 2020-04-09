import React from "react";
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
        userButtonCallback(umsg);
    };

    const decideButtonOrTextInput = umsg => {
        if (umsg.id === 3 || umsg.id === 5 || umsg.id === 7) {
            return (
                <>
                    <Text>Phone Number</Text>
                    <TextInput
                        style={styles.userButton}
                        onSubmitEditing={() => savePhoneNumber(umsg)}
                    />
                </>
            );
        }

        return (
            <TouchableWithoutFeedback
                style={styles.userButton}
                onPress={() => userButtonCallback(umsg)}>
                <Text style={styles.buttonText}>{umsg.display}</Text>
            </TouchableWithoutFeedback>
        );
    };

    const returnUserMsg = umsg => (
        <View style={styles.buttonCOn}>{decideButtonOrTextInput(umsg)}</View>
    );

    return <>{userMsg.map(returnUserMsg)}</>;
};

export default UserButton;

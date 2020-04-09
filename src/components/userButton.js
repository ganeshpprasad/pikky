import React from "react";
import {
    View,
    Button,
    Text,
    TouchableWithoutFeedback,
    TextInput,
} from "react-native";
import {Navigation} from "react-native-navigation";

import {NAMES} from "../screens/constants";
import {styles} from "../styles/onBoardChat";

const UserButton = ({userMsg, componentId, setmsgNumber}) => {
    const navigateToNext = () => {
        Navigation.push(componentId, {
            component: {
                name: NAMES,
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
        umsg.id === 4 ? navigateToNext() : setmsgNumber(umsg);
    };

    const savePhoneNumber = umsg => {
        userButtonCallback(umsg);
    };

    const decideButtonOrTextInput = umsg => {
        if (umsg.id === 3) {
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
                <Text>{umsg.display}</Text>
            </TouchableWithoutFeedback>
        );
    };

    const returnUserMsg = umsg => (
        <View style={styles.buttonCOn}>{decideButtonOrTextInput(umsg)}</View>
    );

    return <>{userMsg.map(returnUserMsg)}</>;
};

export default UserButton;

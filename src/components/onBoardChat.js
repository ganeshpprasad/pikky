import React from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {Navigation} from "react-native-navigation";

import {styles} from "../styles/onBoardChat";
import {userResponses} from "../helperData/userMsgs";
import {NAMES} from "../screens/constants";
import ChatMsgList from "./chatMsgList";

const OnBoardChat = ({msgData, setmsgNumber, msgNumber, componentId}) => {
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
        umsg.id === 3 ? navigateToNext() : setmsgNumber(umsg);
    };

    const userMsg = userResponses[msgNumber] || {msg: "Next"};
    return (
        <View style={styles.screenCon}>
            <ChatMsgList msgData={msgData} />
            {/* <TextInput /> */}
            {userMsg.map(umsg => (
                <View style={styles.buttonCOn}>
                    <TouchableWithoutFeedback
                        style={styles.userButton}
                        onPress={() => userButtonCallback(umsg)}>
                        <Text>{umsg.msg}</Text>
                    </TouchableWithoutFeedback>
                </View>
            ))}
        </View>
    );
};

export default React.memo(OnBoardChat, (p, n) => {
    return p.msgData.length >= n.msgData.length;
});

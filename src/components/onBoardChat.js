import React from "react";
import {View, FlatList, Text, TouchableWithoutFeedback} from "react-native";

import {styles} from "../styles/onBoardChat";
import {userResponses} from "../helperData/userMsgs";
import {msgTypes} from "../helperData/pikkyBotMsgs";

const MsgItem = ({item, msgNumber}) => {
    console.log("is", item);

    return item.map(msgItem => (
        <View
            style={
                msgItem.type === msgTypes.PIKKY
                    ? styles.msgCon
                    : styles.userMsgCon
            }>
            <Text key={msgItem}>{msgItem.msg}</Text>
        </View>
    ));
};

const OnBoardChat = ({msgData, setmsgNumber, msgNumber}) => {
    console.log("msgnumb", msgData);

    const userMsg = userResponses[msgNumber] || {msg: "Next"};
    return (
        <View style={styles.screenCon}>
            <View style={styles.chatMsgsListCon}>
                <FlatList
                    data={msgData}
                    renderItem={({item}) => <MsgItem item={item} />}
                />
            </View>
            {/* <TextInput /> */}
            {userMsg.map(umsg => (
                <View style={styles.buttonCOn}>
                    <TouchableWithoutFeedback
                        style={styles.userButton}
                        onPress={() => setmsgNumber(umsg)}>
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

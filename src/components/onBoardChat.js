import React from "react";
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
} from "react-native";

import {msgTypes} from "../App";

// user and bot msgs
// split the bot line for a different question

const userResponses = [
    [
        {
            msg: "Hey",
            type: msgTypes,
        },
    ],
    [
        {
            msg: "Gmail",
            type: msgTypes,
        },
        {
            msg: "Phone Number",
            type: msgTypes,
        },
    ],
    [
        {
            msg: "Lets do it",
            type: msgTypes,
        },
    ],
];

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

const styles = StyleSheet.create({
    screenCon: {
        flexGrow: 1,
        height: Dimensions.get("window").height - 150,
    },
    chatMsgsListCon: {
        flexGrow: 1,
        padding: 10,
    },
    buttonCOn: {
        flexGrow: 0,
        backgroundColor: "#a6a",
        width: "50%",
        alignSelf: "center",
        padding: 20,
        marginBottom: 10,
    },
    msgCon: {
        backgroundColor: "#eee",
        width: "50%",
        padding: 20,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    userMsgCon: {
        backgroundColor: "#b9b",
        width: "50%",
        padding: 20,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    msgText: {
        fontSize: 18,
    },
    userButton: {
        backgroundColor: "#eee",
        marginLeft: 10,
        marginTop: 10,
        textAlign: "center",
    },
});

export default React.memo(OnBoardChat, (p, n) => {
    return p.msgData.length >= n.msgData.length;
});

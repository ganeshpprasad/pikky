import React from "react";
import {
    View,
    FlatList,
    Button,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableWithoutFeedback,
} from "react-native";

// user and bot msgs
// split the bot line for a different question

const userResponses = ["Hey", "Gmail", "Lets do it"];

const MsgItem = ({item, msgNumber}) => {
    console.log("is", item);

    return (
        <View style={styles.msgCon}>
            <Text key={item}>{item}</Text>
        </View>
    );
};

const OnBoardChat = ({msgData, setmsgNumber, msgNumber}) => {
    console.log("msgnumb", msgNumber, userResponses[msgNumber]);

    const userMsg = userResponses[msgNumber] || "Next";
    return (
        <View style={styles.screenCon}>
            <View style={styles.chatMsgsListCon}>
                <FlatList
                    data={msgData}
                    renderItem={({item}) => <MsgItem item={item} />}
                />
            </View>
            {/* <TextInput /> */}
            <View style={styles.buttonCOn}>
                <TouchableWithoutFeedback
                    style={styles.userButton}
                    onPress={() => setmsgNumber(userMsg)}>
                    <Text>{userMsg}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenCon: {
        flexGrow: 1,
        height: Dimensions.get("window").height - 50,
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
    },
    msgCon: {
        backgroundColor: "#eee",
        width: "50%",
        padding: 20,
        marginLeft: 10,
        marginTop: 10,
    },
    userMsgCon: {
        backgroundColor: "#eee",
        width: "50%",
        padding: 20,
        marginLeft: 10,
        marginTop: 10,
        alignSelf: "flex-end",
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

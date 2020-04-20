import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 21,
        color: "#a6a",
        margin: 10,
        textAlign: "center",
    },
    screenCon: {
        flexGrow: 1,
        // height: Dimensions.get("window").height - 280,
    },
    chatMsgsListCon: {
        // flexGrow: 1,
        padding: 10,
    },
    buttonCon: {
        flexGrow: 0,
        backgroundColor: "#a6a",
        // width: "70%",
        alignSelf: "flex-end",
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
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
        backgroundColor: "#a9a",
        width: "50%",
        padding: 20,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "flex-end",
        borderRadius: 10,
    },
    userMsgText: {
        textAlign: "right",
        color: "#fff",
    },
    botMsgText: {},
    msgText: {
        fontSize: 18,
    },
    userButton: {
        backgroundColor: "#eee",
        marginLeft: 10,
        marginTop: 10,
    },
    userText: {
        borderColor: "#b9b",
        borderWidth: 1,
        width: "80%",
        alignSelf: "flex-end",
        padding: 20,
        marginBottom: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    textInput: {
        borderBottomColor: "#a6a",
        borderBottomWidth: 2,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "500",
    },
});

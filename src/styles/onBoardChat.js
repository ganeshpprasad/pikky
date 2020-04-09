import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
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

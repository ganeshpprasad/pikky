import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 21,
        color: '#a6a',
        margin: 10,
        textAlign: 'center',
    },
    screenCon: {
        flexGrow: 1,
        // height: Dimensions.get("window").height - 280,
    },
    chatMsgsListCon: {
        // flexGrow: 1,
        padding: 10,
    },
    userText: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 20,
    },
    chatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 60,
        paddingRight: 60,
        height: 50,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 4,
        marginLeft: 20,
    },
    skipButton: {
        backgroundColor: '#ff7366',
    },
    cancelCon: {
        backgroundColor: '#fff',
    },
    submitCon: {
        backgroundColor: '#49dfc4',
    },
    msgCon: {
        backgroundColor: '#fff',
        // width: '50%',
        padding: 20,
        margin: 20,
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 35,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 4,
    },
    userMsgCon: {
        backgroundColor: '#49dfc4',
        padding: 15,
        paddingLeft: 40,
        paddingRight: 40,
        height: 50,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 4,
        alignSelf: 'flex-end',
    },
    userMsgConCancel: {
        backgroundColor: '#ff7366',
    },
    userMsgText: {
        textAlign: 'right',
        color: '#fff',
    },
    botMsgText: {},
    msgText: {
        fontSize: 18,
    },
    buttonText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
    },
    skipButtonText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
    },
    textInput: {
        color: '#000',
        height: 30,
        padding: 0,
    },
    buttonDefaultCon: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'flex-end',
    },
    buttonsWithSubmit: {
        flexDirection: 'column',
        margin: 10,
    },
});

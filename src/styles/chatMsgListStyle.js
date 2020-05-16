import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    //
    // User and pikky msgs
    //
    msgCon: {
        padding: 15,
        margin: 10,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 4,
    },
    pikkyMsgCon: {
        backgroundColor: '#fff',
        borderTopRightRadius: 35,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 35,
    },
    userMsgCon: {
        backgroundColor: '#49dfc4',
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 35,
        borderTopLeftRadius: 35,
        alignSelf: 'flex-end',
    },
    botMsgText: {
        fontFamily: 'OpenSans-Regular',
    },
    msgText: {
        fontSize: 18,
    },
    chatMsgsListCon: {
        // flexShrink: 1,
        padding: 10,
        // backgroundColor: '#ef1',
    },
    userMsgText: {
        textAlign: 'right',
        color: '#fff',
        fontFamily: 'OpenSans-Regular',
    },
});

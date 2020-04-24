import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 21,
        color: '#a6a',
        margin: 10,
        textAlign: 'center',
    },
    screenCon: {
        // flex: 1,
        backgroundColor: '#3fa',
        maxHeight: Dimensions.get('screen').height - 160,
        margin: 10,
        // justifyContent: 'center',
    },
    chatMsgsListCon: {
        flexShrink: 1,
        margin: 10,
        backgroundColor: '#ef1',
    },
    centralButton: {
        width: '60%',
        alignSelf: 'center',
    },
    userText: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 20,
        width: '60%',
        alignSelf: 'flex-end',
        paddingLeft: 40,
        paddingRight: 40,
    },
    genderButtons: {
        paddingLeft: 30,
        paddingRight: 30,
        marginRight: 8,
    },
    msgCon: {
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
    pikkyMsgCon: {
        backgroundColor: '#fff',
    },
    userMsgCon: {
        backgroundColor: '#49dfc4',
        // padding: 15,
        // paddingLeft: 40,
        // paddingRight: 40,
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
        fontFamily: 'OpenSans-Regular',
    },
    botMsgText: {
        fontFamily: 'OpenSans-Regular',
    },
    msgText: {
        fontSize: 18,
    },
    //
    // User button
    //
    buttonDefaultCon: {
        flexDirection: 'row',
        margin: 10,
        padding: 20,
        justifyContent: 'space-between',
        backgroundColor: '#e4e',
        flexGrow: 1,
    },
    buttonsWithSubmit: {
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#4fd',
        flexGrow: 1,
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
    chatButton: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        maxWidth: '40%',
        // paddingRight: 60,
        // paddingLeft: 60,
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
        // marginRight: 20,
    },
    buttonText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'OpenSans-Regular',
    },
    skipButtonText: {
        color: '#111',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        fontFamily: 'OpenSans-Regular',
    },
    textInput: {
        color: '#000',
        height: 30,
        padding: 0,
        flexGrow: 1,
    },
    //
    // OTP C
    //
    otpButton: {
        borderRadius: 15,
        shadowColor: 'rgb(0,0,0)',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        shadowOpacity: 0.2,
        elevation: 4,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#fff',
        marginRight: 10,
    },
    otpButtonCon: {
        flexDirection: 'row',
        marginBottom: 20,
        marginRight: 20,
        alignSelf: 'flex-end',
        //    paddingLeft: 40,
        //    paddingRight: 40,
    },
    otpButtonLast: {
        borderBottomRightRadius: 0,
    },
    locationTextInput: {
        marginTop: 20,
        marginBottom: 0,
    },
    locateButton: {
        // width: '60%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
});

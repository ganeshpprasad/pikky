import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    //
    // User button
    //
    userText: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: 20,
        width: '80%',
        alignSelf: 'flex-end',
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
        alignItems: 'center',
    },
    buttonDefaultCon: {
        flexDirection: 'row',
        margin: 10,
        padding: 20,
        justifyContent: 'space-between',
        // backgroundColor: '#e4e',
        flexGrow: 1,
    },
    buttonsWithSubmit: {
        flexDirection: 'column',
        margin: 10,
        // backgroundColor: '#4fd',
        flexGrow: 1,
    },
    buttonsForLocation: {
        flexDirection: 'column',
        margin: 10,
        flexGrow: 1,
        paddingBottom: 300,
    },
    gridView: {
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
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
    centralButton: {
        width: '60%',
        alignSelf: 'center',
    },
    genderButtons: {
        marginRight: 6,
        flexGrow: 1,
        backgroundColor: '#49dfc4',
    },
    buttonText: {
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
    errorMsgTxt: {
        color: 'red',
        alignSelf: 'flex-end',
        marginRight: 10,
        marginTop: -12,
        marginBottom: 6,
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
    },

    locationTextInput: {
        marginTop: 20,
        marginBottom: 0,
    },
    locateButton: {
        width: '40%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
    },
});

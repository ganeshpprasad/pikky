import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    onboardfinishCon: {
        height: Dimensions.get('window').height,
    },
    logoCon: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        // backgroundColor: '#af1',
    },
    msgsCon: {
        alignItems: 'center',
    },
    pikkyMsgYellow: {
        backgroundColor: 'rgb(255, 230, 72)',
    },
    onboardMsgsCon: {
        padding: 60,
    },
    finishMsgsCon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    finishMsgs: {
        width: '40%',
    },
    leftButton: {
        backgroundColor: '#ff7366',
    },
    finishMsgText: {
        textAlign: 'center',
        color: '#fff',
    },
});

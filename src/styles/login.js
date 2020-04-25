import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
    loginCon: {
        height: screenHeight,
    },
    topbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    brandingCon: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brandingConHidden: {
        display: 'none',
    },
    pikkySignal: {width: 15, height: 15, marginBottom: 6},
    pikkyImage: {width: 120, height: 120, marginLeft: 30},
    shadowOfPikky: {width: 150, height: 60, marginLeft: 15},
    chatCon: {
        flexGrow: 1,
        backgroundColor: 'rgb(255, 230, 72)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    chatConFullScreen: {
        backgroundColor: 'rgb(255, 230, 72)',
        flexGrow: 1,
        height: screenHeight - 120,
        // paddingTop: 50,
        paddingBottom: 60,
    },
});

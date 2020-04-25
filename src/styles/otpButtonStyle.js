import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    },
    otpButtonLast: {
        borderBottomRightRadius: 0,
    },
});

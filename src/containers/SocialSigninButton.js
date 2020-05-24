import React, {useEffect, useCallback} from 'react';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from '../styles/userButtonStyle';
import {saveSocialData} from '../store/auth/actions';

const MSG_NUM_OF_LOGIN_DONE = 5;
const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        return await GoogleSignin.signIn();
        // this.setState({ userInfo });
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
        return error;
    }
};

const SocialSigninButton = props => {
    useEffect(() => {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            client_id:
                '235278786718-nat9vk6f9c6p9orov5d9ur66n2kse9pm.apps.googleusercontent.com',
            webClientId:
                '235278786718-si8702eahbig7mun43ulertvreqjpp2j.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS
        });

        return () => {
            // cleanup;
        };
    }, []);

    // actions
    const dispatch = useDispatch();
    let authState = useSelector(s => s.auth);

    if (authState.success === true) {
        props.userButtonCallback(MSG_NUM_OF_LOGIN_DONE, {msg: 'Social Login'});
    }

    let loginToPikky = useCallback(
        ({idToken, user: {id}}) => dispatch(saveSocialData({idToken, id})),
        [dispatch],
    );

    let startSignIn = async () => {
        let userData = await signIn();
        console.log('userData', userData);
        loginToPikky(userData);
        // login to pikky
    };

    return (
        <TouchableOpacity
            style={[styles.chatButton, styles.cancelCon]}
            onPress={() => startSignIn()}>
            <Text style={styles.buttonText}>{props.umsg.display}</Text>
        </TouchableOpacity>
    );
};

export default SocialSigninButton;

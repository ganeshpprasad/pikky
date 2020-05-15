import React from 'react';

import Chatbutton from '../components/chatbutton';


const signIn = async umsg => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log('user', userInfo);
        setmsgNumber(umsg);
        // this.setState({ userInfo });
    } catch (error) {
        setError(true);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }
};

const SocialSigninButton = () => {
    return (
        <Chatbutton
            umsg={umsg}
            color={color}
            extraStyle={extraStyle}
            userButtonCallback={userButtonCallback}
        />
    );
};

export default SocialSigninButton;

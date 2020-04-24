/**
 * Landing screen if the user is not logged in.
 */

import React, {useState} from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Image,
    StatusBar,
    View,
} from 'react-native';

import OnBoardChat from '../components/onBoardChat';
import {onBoardingData} from '../helperData/pikkyBotMsgs';
import {userResponses} from '../helperData/userMsgs';
import {useOnBoardChat} from '../effects/onBoardChat';
import {styles} from '../styles/login';

const {
    pikkyImage,
    pikkySignal,
    chatCon,
    shadowOfPikky,
    brandingCon,
    loginCon,
    brandingConHidden,
    chatConFullScreen,
} = styles;

const Login = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(
        onBoardingData,
    );
    const [loginFullScreen, setLoginFullScreen] = useState(false);

    if (msgNumber > 0) {
        !loginFullScreen ? setLoginFullScreen(true) : null;
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView>
                <View style={loginCon}>
                    <View
                        style={
                            loginFullScreen ? brandingConHidden : brandingCon
                        }>
                        <Image
                            source={require('../assets/onBoarding/43x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/33x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/23x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/13x.png')}
                            style={pikkySignal}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/logo2x.png')}
                            style={pikkyImage}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../assets/onBoarding/shad3x.png')}
                            style={shadowOfPikky}
                            resizeMode="contain"
                        />
                    </View>

                    <KeyboardAvoidingView
                        behavior={Platform.Os === 'ios' ? 'padding' : 'padding'}
                        keyboardVerticalOffset={150}
                        style={loginFullScreen ? chatConFullScreen : chatCon}>
                        <OnBoardChat
                            msgData={msgData}
                            setmsgNumber={setUserMsgNumber}
                            msgNumber={msgNumber}
                            componentId={props.componentId}
                            userResponses={userResponses}
                        />
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </>
    );
};

export default Login;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Text,
    StatusBar,
} from "react-native";

import OnBoardChat from "../components/onBoardChat";
import {onBoardingData} from "../helperData/pikkyBotMsgs";
import {userResponses} from "../helperData/userMsgs";
import {useOnBoardChat} from "../effects/onBoardChat";
import {styles} from "../styles/onBoardChat";

const Login = props => {
    const {msgData, setUserMsgNumber, msgNumber} = useOnBoardChat(
        onBoardingData,
    );

    return (
        <>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "position"}
                style={{flex: 1}}>
                <SafeAreaView>
                    <Text style={styles.mainTitle}>
                        Let's get to know each other
                    </Text>
                    <OnBoardChat
                        msgData={msgData}
                        setmsgNumber={setUserMsgNumber}
                        msgNumber={msgNumber}
                        componentId={props.componentId}
                        userResponses={userResponses}
                    />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Login;

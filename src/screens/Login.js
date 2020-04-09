/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    StatusBar,
} from "react-native";

import OnBoardChat from "../components/onBoardChat";
import {onBoardingData} from "../helperData/pikkyBotMsgs";

const Login = props => {
    const [msgNumber, setmsgNumber] = useState(0);
    const [msgData, setMsgData] = useState([]);

    useEffect(() => {
        msgNumber < onBoardingData.length &&
            setMsgData(msgs => [...msgs, onBoardingData[msgNumber]]);
    }, [msgNumber]);

    const setUserMsgNumber = userMsg => {
        setMsgData(msgs => [...msgs, [userMsg]]);
        setmsgNumber(msgNumber => msgNumber + 1);
    };

    return (
        <>
            <StatusBar barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "position"}
                style={{flex: 1}}>
                <SafeAreaView>
                    <OnBoardChat
                        msgData={msgData}
                        setmsgNumber={setUserMsgNumber}
                        msgNumber={msgNumber}
                        componentId={props.componentId}
                    />
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Login;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from "react";
import {SafeAreaView, StyleSheet, StatusBar} from "react-native";

import OnBoardChat from "./components/onBoardChat";

const onBoardingData = [
    "Hello",
    `Nice to meet you`,
    `How would you like to login?`,
    `Successfully logged in!`,
    `Let's get to know you better`,
];

const App = () => {
    const [msgNumber, setmsgNumber] = useState(0);
    const [msgData, setMsgData] = useState([]);

    console.log("msgNumber", msgNumber);

    useEffect(() => {
        msgNumber < onBoardingData.length &&
            setMsgData(msgs => [...msgs, onBoardingData[msgNumber]]);
    }, [msgNumber]);

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <OnBoardChat
                    msgData={msgData}
                    setmsgNumber={userMsg => {
                        setMsgData(msgs => [...msgs, userMsg]);
                        setmsgNumber(msgNumber => msgNumber + 1);
                    }}
                    msgNumber={msgNumber}
                />
            </SafeAreaView>
        </>
    );
};

export default App;

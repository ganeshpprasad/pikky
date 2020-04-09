import React from "react";
import {View} from "react-native";

import {styles} from "../styles/onBoardChat";
import {userResponses} from "../helperData/userMsgs";
import UserButton from "./userButton";
import ChatMsgList from "./chatMsgList";

const OnBoardChat = ({msgData, setmsgNumber, msgNumber, componentId}) => {
    const userMsg = userResponses[msgNumber] || {msg: "Next"};
    return (
        <View style={styles.screenCon}>
            <ChatMsgList msgData={msgData} />
            <UserButton
                userMsg={userMsg}
                componentId={componentId}
                setmsgNumber={setmsgNumber}
            />
        </View>
    );
};

export default React.memo(OnBoardChat, (p, n) => {
    return p.msgData.length >= n.msgData.length;
});

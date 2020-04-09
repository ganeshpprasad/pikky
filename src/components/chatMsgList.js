import React from "react";
import {View, Text, FlatList} from "react-native";

import {styles} from "../styles/onBoardChat";
import {msgTypes} from "../helperData/pikkyBotMsgs";

const MsgItem = ({item}) => {
    return item.map(msgItem => (
        <View
            style={
                msgItem.type === msgTypes.PIKKY
                    ? styles.msgCon
                    : styles.userMsgCon
            }>
            <Text key={msgItem}>{msgItem.msg}</Text>
        </View>
    ));
};

const ChatMsgList = ({msgData}) => {
    return (
        <View style={styles.chatMsgsListCon}>
            <FlatList
                data={msgData}
                renderItem={({item}) => <MsgItem item={item} />}
            />
        </View>
    );
};

export default ChatMsgList;

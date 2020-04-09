import React from "react";
import {View, Text, FlatList} from "react-native";

import {styles} from "../styles/onBoardChat";
import {msgTypes} from "../helperData/pikkyBotMsgs";

const {botMsgText, userMsgText, chatMsgsListCon, msgCon, userMsgCon} = styles;

const MsgItem = ({item}) => {
    return item.map(({id, type, msg}) => (
        <View key={id} style={type === msgTypes.PIKKY ? msgCon : userMsgCon}>
            <Text style={type === msgTypes.PIKKY ? botMsgText : userMsgText}>
                {msg}
            </Text>
        </View>
    ));
};

const ChatMsgList = ({msgData}) => {
    return (
        <View style={chatMsgsListCon}>
            <FlatList
                data={msgData}
                renderItem={({item}) => <MsgItem item={item} />}
            />
        </View>
    );
};

export default ChatMsgList;

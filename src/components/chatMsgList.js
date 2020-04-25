import React from 'react';
import {View, Text, FlatList} from 'react-native';
// import * as Animatable from 'react-native-animatable';

import {styles} from '../styles/chatMsgListStyle';
import {msgTypes} from '../helperData/pikkyBotMsgs';

const {
    botMsgText,
    userMsgText,
    pikkyMsgCon,
    chatMsgsListCon,
    msgCon,
    userMsgCon,
} = styles;

const msgItemCb = ({id, type, msg}) => {
    let msgTeller;
    if (type === msgTypes.PIKKY) {
        msgTeller = pikkyMsgCon;
    } else {
        msgTeller = userMsgCon;
    }
    const msgStyle = [msgCon, msgTeller];
    return (
        <View key={id} style={msgStyle}>
            <Text style={type === msgTypes.PIKKY ? botMsgText : userMsgText}>
                {msg}
            </Text>
        </View>
    );
};

const MsgItem = ({item}) => {
    return item.map(msgItemCb);
};

const ChatMsgList = ({msgData}) => {
    return (
        <View style={chatMsgsListCon}>
            <FlatList
                inverted
                data={msgData}
                renderItem={({item}) => <MsgItem item={item} />}
            />
        </View>
    );
};

export default ChatMsgList;

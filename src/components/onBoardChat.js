import React, {useRef} from 'react';
import {ScrollView} from 'react-native';

import {styles} from '../styles/onBoardChat';
import UserButton from './userButton';
import ChatMsgList from './chatMsgList';

const OnBoardChat = ({
    msgData,
    setmsgNumber,
    msgNumber,
    componentId,
    userResponses,
}) => {
    const userMsg = userResponses[msgNumber] || {msg: 'Next'};
    let scrollRef = useRef(null);
    return (
        <ScrollView
            ref={scrollRef}
            style={styles.screenCon}
            onContentSizeChange={() => scrollRef.current.scrollToEnd()}>
            <ChatMsgList msgData={msgData} />
            <UserButton
                userMsg={userMsg}
                componentId={componentId}
                setmsgNumber={setmsgNumber}
            />
        </ScrollView>
    );
};

export default React.memo(OnBoardChat, (p, n) => {
    return p.msgData.length >= n.msgData.length;
});

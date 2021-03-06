import {useState, useEffect} from 'react';

export const useOnBoardChat = onBoardingData => {
    const [msgNumber, setmsgNumber] = useState(0);
    const [msgData, setMsgData] = useState([]);

    useEffect(() => {
        msgNumber < onBoardingData.length &&
            setMsgData(msgs => [onBoardingData[msgNumber], ...msgs]);
    }, [msgNumber, onBoardingData]);

    const setUserMsgNumber = userMsg => {
        setMsgData(msgs => [[userMsg], ...msgs]);
        setmsgNumber(_msgNumber => _msgNumber + 1);
    };

    return {
        msgNumber,
        setUserMsgNumber,
        msgData,
    };
};

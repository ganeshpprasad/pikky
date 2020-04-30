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
        let ONE_INC = 1;
        if (userMsg.id === 4) {
            ONE_INC = 3;
        } else if (userMsg.id == 9) {
            ONE_INC = 2;
        }
        setmsgNumber(_msgNumber => _msgNumber + ONE_INC);
    };

    return {
        msgNumber,
        setUserMsgNumber,
        msgData,
    };
};

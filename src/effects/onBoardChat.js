import {useState, useEffect} from "react";

export const useOnBoardChat = onBoardingData => {
    const [msgNumber, setmsgNumber] = useState(0);
    const [msgData, setMsgData] = useState([]);

    useEffect(() => {
        msgNumber < onBoardingData.length &&
            setMsgData(msgs => [...msgs, onBoardingData[msgNumber]]);
    }, [msgNumber, onBoardingData]);

    const setUserMsgNumber = userMsg => {
        setMsgData(msgs => [...msgs, [userMsg]]);
        setTimeout(() => {
            setmsgNumber(msgNumber => msgNumber + 1);
        }, 500);
    };

    return {
        msgNumber,
        setUserMsgNumber,
        msgData,
    };
};

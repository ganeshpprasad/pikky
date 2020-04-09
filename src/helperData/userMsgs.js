import {msgTypes} from "./pikkyBotMsgs";

export const userResponses = [
    [
        {
            msg: "Hey",
            type: msgTypes,
            id: 1,
        },
    ],
    [
        {
            msg: "Gmail",
            type: msgTypes,
            id: 2,
        },
        {
            msg: "Phone Number",
            type: msgTypes,
        },
    ],
    [
        {
            msg: "Lets do it",
            type: msgTypes,
            id: 3,
        },
    ],
];

export const nameResponses = [
    [
        {
            id: 4,
            type: msgTypes.USER,
            msg: "User Name",
        },
    ],
    [
        {
            msg: "Detect Location",
            type: msgTypes,
            id: 5,
        },
        {
            msg: "Enter Manually",
            type: msgTypes,
            id: 6,
        },
    ],
    [
        {
            msg: "Finish",
            type: msgTypes.USER,
            id: 7,
        },
    ],
];

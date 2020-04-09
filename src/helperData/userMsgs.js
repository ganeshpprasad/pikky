import {msgTypes} from "./pikkyBotMsgs";

export const userResponses = [
    [
        {
            msg: "Hey",
            type: msgTypes,
            id: 1,
            display: "Hey",
        },
    ],
    [
        {
            msg: "Logged in using Gmail",
            type: msgTypes,
            id: 2,
            display: "GMail",
        },
        {
            msg: "Logged in using Phone Number",
            type: msgTypes,
            display: "Phone number",
            id: 3,
        },
    ],
    [
        {
            msg: "Lets do it",
            type: msgTypes,
            id: 4,
            display: "Lets do it",
        },
    ],
];

export const nameResponses = [
    [
        {
            id: 5,
            type: msgTypes.USER,
            msg: "User Name",
            display: "User Name",
        },
    ],
    [
        {
            msg: "Detect Location",
            type: msgTypes,
            id: 6,
            display: "Detect Location",
        },
        {
            msg: "Enter Manually",
            type: msgTypes,
            id: 7,
            display: "Enter Manually",
        },
    ],
    [
        {
            msg: "Finish",
            display: "Finish",
            type: msgTypes.USER,
            id: 8,
        },
    ],
];

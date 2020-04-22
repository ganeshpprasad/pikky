import {msgTypes} from './pikkyBotMsgs';

export const userResponses = [
    [
        {
            msg: 'Skip',
            type: msgTypes,
            id: 1,
            display: 'Skip',
        },
        {
            msg: 'Sign Up',
            type: msgTypes,
            id: 1.5,
            display: 'Sign Up',
        },
    ],
    [
        {
            msg: 'Read',
            type: msgTypes,
            id: 2,
            display: 'Read',
        },
        {
            msg: 'Accept',
            type: msgTypes,
            id: 3,
            display: 'Accept',
        },
    ],
    [
        {
            msg: 'Social',
            type: msgTypes,
            id: 4,
            display: 'Social',
        },
        {
            msg: 'Phone',
            type: msgTypes,
            id: 5,
            display: 'Phone',
        },
    ],
    [
        {
            msg: '91+ ',
            id: 6,
            type: msgTypes.USER,
            display: null,
        },
        {
            msg: 'OTP',
            type: msgTypes,
            id: 7,
            display: 'OTP',
        },
    ],
    [
        {
            msg: '',
            type: msgTypes,
            id: 8,
            display: null,
        },
        {
            msg: 'Verified',
            type: msgTypes,
            id: 9,
            display: 'Enter OTP',
        },
    ],
    [
        {
            msg: 'username',
            display: '@username',
            type: msgTypes.USER,
            id: 10,
        },
        {
            msg: 'username',
            display: 'Done',
            type: msgTypes.USER,
            id: 11,
        },
    ],
    [
        {
            msg: 'username',
            display: 'FEMALE',
            type: msgTypes.USER,
            id: 12,
        },
        {
            msg: 'username',
            display: 'MALE',
            type: msgTypes.USER,
            id: 13,
        },
        {
            msg: 'username',
            display: 'OTHERS',
            type: msgTypes.USER,
            id: 14,
        },
    ],
    [
        {
            msg: 'Locate',
            display: 'Locate',
            type: msgTypes.USER,
            id: 15,
        },
        {
            msg: 'Manual',
            display: 'Manual',
            type: msgTypes.USER,
            id: 16,
        },
    ],
];

export const nameResponses = [
    [
        {
            id: 5,
            type: msgTypes.USER,
            msg: 'User Name',
            display: 'User Name',
        },
    ],
    [
        {
            msg: 'Detect Location',
            type: msgTypes,
            id: 6,
            display: 'Detect Location',
        },
        {
            msg: 'Saved location',
            type: msgTypes,
            id: 7,
            display: 'Enter Manually',
        },
    ],
    [
        {
            msg: 'Finish',
            display: 'Finish',
            type: msgTypes.USER,
            id: 8,
        },
    ],
];

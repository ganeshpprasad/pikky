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
            msg: 'Locate',
            display: 'Locate',
            type: msgTypes.USER,
            id: 15,
            isSubmit: true,
        },
        {
            msg: 'Manual',
            display: 'Enter manually',
            type: msgTypes.USER,
            id: 16,
            isTextInput: true,
        },
    ],
    [
        {
            msg: 'Google',
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
            isSubmit: true,
            isTextInput: true,
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
            isSubmit: true,
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
            isSubmit: true,
            isTextInput: true,
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
];

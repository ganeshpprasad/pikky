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
            msg: 'food-kinds',
            display: 'Vegatarian',
            type: msgTypes.USER,
            id: 23,
            isTextInput: false,
            isSelect: true,
            isTwoStepSelect: true,
        },
    ],
    [
        {
            msg: 'food-been-eating',
            display: 'Next',
            type: msgTypes.USER,
            id: 24,
            isTextInput: false,
            isSelect: true,
        },
    ],
    [
        {
            msg: 'food-fav',
            display: 'Next',
            type: msgTypes.USER,
            id: 21,
            isTextInput: false,
            isSelect: false,
            isSubmit: true,
            verticalList: true,
        },
    ],
    [
        {
            msg: 'food-fav-done',
            display: 'Absolutely!',
            type: msgTypes.USER,
            id: 22,
            isTextInput: false,
            isSelect: false,
            isSubmit: false,
        },
    ],
    [
        {
            msg: 'True that!',
            display: 'True that!',
            type: msgTypes.USER,
            id: 25,
            isTextInput: false,
            isSelect: true,
        },
    ],
    [
        {
            msg: 'food-kinds',
            display: 'Photos will be added',
            type: msgTypes.USER,
            id: 26,
            isTextInput: true,
            isSelect: false,
        },
    ],
    // {
    //     msg: 'food-kinds',
    //     display: 'Non-Veg',
    //     type: msgTypes.USER,
    //     id: 27,
    //     isTextInput: false,
    //     isSelect: false,
    // },
];

import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';

import {styles} from '../styles/otpButtonStyle';

const OTPbuttons = () => {
    const [otp, setOtp] = useState([]);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const refs = [ref1, ref2, ref3, ref4];

    const handleKeyPress = (pos, e) => {
        const {key} = e.nativeEvent;
        if (key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[pos] === undefined) {
                focusOnPrevText(pos + 1);
                newOtp[pos - 1] = undefined;
            } else {
                newOtp[pos] = undefined;
            }
            setOtp(newOtp);
            console.log('pre');
        }
    };

    const focusOnPrevText = olength => {
        const prevRef =
            olength === 4
                ? ref3
                : olength === 3
                ? ref2
                : olength === 2
                ? ref1
                : null;

        prevRef && prevRef.current.focus();
    };

    const focusOnNextText = pos => {
        const ref =
            pos === 0 ? ref2 : pos === 1 ? ref3 : pos === 2 ? ref4 : null;
        ref && ref.current.focus();
    };

    const setOtpInPos = (pos, num) => {
        const charCode = num.charCodeAt(0);
        if (charCode > 47 && charCode < 58) {
            focusOnNextText(pos);
            const newArr = [...otp];
            newArr[pos] = num;
            setOtp(newArr);
        }
    };
    console.log('otp', otp);

    const createTextInput = index => (
        <TextInput
            maxLength={1}
            style={[
                styles.otpButton,
                index === 3 ? styles.otpButtonLast : null,
            ]}
            value={otp[index]}
            autoFocus={index === 0 ? true : false}
            onKeyPress={e => handleKeyPress(index, e)}
            onChangeText={text => setOtpInPos(index, text)}
            ref={refs[index]}
            keyboardType={'numeric'}
        />
    );

    return (
        <View style={[styles.otpButtonCon]}>
            {createTextInput(0)}
            {createTextInput(1)}
            {createTextInput(2)}
            {createTextInput(3)}
        </View>
    );
};

export default OTPbuttons;

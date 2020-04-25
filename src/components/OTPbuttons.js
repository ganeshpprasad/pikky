import React, {useState, useRef} from 'react';
import {View, TextInput} from 'react-native';

import {styles} from '../styles/otpButtonStyle';

const OTPbuttons = () => {
    const [otp, setOtp] = useState([]);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

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
        console.log('pre', prevRef);
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

    return (
        <View style={[styles.otpButtonCon]}>
            <TextInput
                maxLength={1}
                style={styles.otpButton}
                value={otp[0]}
                autoFocus
                onKeyPress={e => handleKeyPress(0, e)}
                onChangeText={text => setOtpInPos(0, text)}
                ref={ref1}
                keyboardType={'numeric'}
            />
            <TextInput
                maxLength={1}
                style={styles.otpButton}
                value={otp[1]}
                onKeyPress={e => handleKeyPress(1, e)}
                onChangeText={text => setOtpInPos(1, text)}
                ref={ref2}
                keyboardType={'numeric'}
            />
            <TextInput
                maxLength={1}
                style={styles.otpButton}
                value={otp[2]}
                onKeyPress={e => handleKeyPress(2, e)}
                onChangeText={text => setOtpInPos(2, text)}
                ref={ref3}
                keyboardType={'numeric'}
            />
            <TextInput
                maxLength={1}
                style={[styles.otpButton, styles.otpButtonLast]}
                value={otp[3]}
                onKeyPress={e => handleKeyPress(3, e)}
                onChangeText={text => setOtpInPos(3, text)}
                ref={ref4}
                keyboardType={'numeric'}
            />
        </View>
    );
};

export default OTPbuttons;

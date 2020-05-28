import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

import LoginDone from './components/LoginDone';

import BACK from './assets/back.png';
import HELP from './assets/help.png';
import LOGO from './assets/logo.png';
import NEXT from './assets/next.png';
import NEXTA from './assets/nexta.png';
import ERROR from './assets/i.png';

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            activateNext: false,
            isError: false,
            errorMsg: '',
            otp: false,
            otpNum: '',
            loginDone: false,
        };
    }

    openOtpField = () => {
        if (this.state.otp) {
            this.setState({loginDone: true});
        }
        if (
            !this.state.phone.match(
                /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
            )
        ) {
            this.setState({isError: true, errorMsg: 'Enter A valid Number'});
            return;
        } else {
            this.setState({otp: true, activateNext: false});
        }
    };

    setPhoneNum = t => {
        this.setState({activateNext: false});
        if (t.length === 10) {
            this.setState({activateNext: true});
        }
        this.setState({
            isError: false,
        });
        this.setState({phone: t});
    };

    setOtp = t => {
        this.setState({activateNext: false});
        if (t.length === 4) {
            this.setState({activateNext: true});
        }
        this.setState({
            isError: false,
        });
        this.setState({otpNum: t});
    };

    render() {
        if (this.state.loginDone) {
            return <LoginDone />;
        }
        return (
            <View style={styles.loginCon}>
                <View>
                    <View style={styles.topBarCon}>
                        <TouchableOpacity>
                            <Image source={BACK} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={HELP} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logoCon}>
                        <Image style={styles.logo} source={LOGO} />
                    </View>
                    <View style={styles.mainTextCon}>
                        {this.state.otp ? (
                            <Text style={styles.mainText}>
                                Enter the OTP sent to your mobile.
                            </Text>
                        ) : (
                            <Text style={styles.mainText}>
                                What is your mobile phone number?
                            </Text>
                        )}
                    </View>
                    {!this.state.otp ? (
                        <View style={styles.textInputCon}>
                            <Text style={styles.textInputP}>+91</Text>
                            <TextInput
                                autoFocus={true}
                                maxLength={10}
                                value={this.state.phone}
                                onChangeText={this.setPhoneNum}
                                keyboardType="numeric"
                                style={styles.textInput}
                            />
                        </View>
                    ) : (
                        <View style={styles.textInputCon}>
                            <TextInput
                                autoFocus={true}
                                maxLength={6}
                                value={this.state.otpNum}
                                onChangeText={this.setOtp}
                                keyboardType="numeric"
                                style={styles.textInput}
                            />
                        </View>
                    )}
                    {this.state.isError && (
                        <>
                            <Text style={styles.errorMsg}>
                                <Image
                                    style={styles.errorIcon}
                                    source={ERROR}
                                />
                                {'  '}
                                {this.state.errorMsg}
                            </Text>
                        </>
                    )}
                </View>
                <View style={styles.bottomBtnCon}>
                    <TouchableOpacity
                        onPress={this.openOtpField}
                        style={styles.bottomBtn}>
                        {this.state.activateNext ? (
                            <Image source={NEXTA} />
                        ) : (
                            <Image source={NEXT} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    errorMsg: {
        color: 'rgb(255, 115, 102)',
        textAlign: 'center',
        marginTop: 10,
    },
    errorIcon: {
        paddingRight: 5,
    },
    loginCon: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: 1,
    },
    topBarCon: {
        display: 'flex',
        flexDirection: 'row',
        margin: 15,
        width: '90%',
        justifyContent: 'space-between',
    },
    topBarImg: {},
    logo: {},
    logoCon: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '40%',
    },
    mainTextCon: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
    },
    mainText: {
        // textAlign: 'left',
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
        marginLeft: 30,
    },
    textInputCon: {
        marginTop: 10,
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifySelf: 'cexnter',
        borderBottomColor: '#eee',
        borderBottomWidth: 2,
    },
    textInputP: {
        fontSize: 24,
        fontFamily: 'OpenSans-Regular',
    },
    textInput: {
        flexGrow: 1,
        fontFamily: 'OpenSans-Regular',
        fontSize: 24,
    },
    bottomBtnCon: {
        alignSelf: 'flex-end',
        flexGrow: 1,
        margin: 15,
    },
    bottomBtn: {
        marginTop: 'auto',
    },
};

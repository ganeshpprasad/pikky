import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

import LoginDone from './components/LoginDone';
import Topbar from './components/Topbar';
import Question from './components/Question';
import BasePrefs from './components/BasePrefs';

import LOGO from './assets/logo.png';
import NEXT from './assets/next.png';
import NEXTA from './assets/nexta.png';
import ERROR from './assets/i.png';
import STRT from './assets/strt.png';

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
            loginDone: true,
            isFoodPref: false,
            isChilhoodFood: false,
            isFavCuisine: false,
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

    gotoFoodPref = () => this.setState({isFoodPref: true});

    render() {
        if (this.state.isFoodPref) {
            let question = this.state.isChilhoodFood
                ? 'What food did you grow up eating? Enter at least three. '
                : this.state.isFavCuisine
                ? 'What are your favourite cuisines?'
                : 'What are your food preferences? Select as many as you like.';

            return (
                <View>
                    <Topbar />
                    <View style={styles.logoStrt}>
                        <Image source={STRT} />
                    </View>
                    <Question question={question} />
                    <BasePrefs />
                </View>
            );
        }
        if (this.state.loginDone) {
            return <LoginDone gotoFoodPref={this.gotoFoodPref} />;
        }

        let question = this.state.otp
            ? 'Enter the OTP sent to your mobile.'
            : 'What is your mobile phone number?';

        return (
            <View style={styles.loginCon}>
                <View>
                    <Topbar />
                    <View style={styles.logoCon}>
                        <Image style={styles.logo} source={LOGO} />
                    </View>
                    <Question question={question} />
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
    topBarImg: {},
    logo: {},
    logoCon: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: '40%',
    },
    logoStrt: {
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
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

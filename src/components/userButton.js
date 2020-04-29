import React, {useState, useRef} from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import GetLocation from 'react-native-get-location';
import RNGooglePlaces from 'react-native-google-places';
import {debounce} from 'lodash';

GoogleSignin.configure({
    // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    client_id:
        '235278786718-nat9vk6f9c6p9orov5d9ur66n2kse9pm.apps.googleusercontent.com',
    // webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    // hostedDomain: '', // specifies a hosted domain restriction
    // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS
});
import {Navigation} from 'react-native-navigation';
// import {View} from "react-native-animatable";

import {NAMES, USER_ACCCOUNT} from '../screens/constants';
import {styles} from '../styles/userButtonStyle';
import OTPbuttons from './OTPbuttons';
import ChatTextInput from './chatTexInput';

const UserButton = ({userMsg, componentId, setmsgNumber}) => {
    const [textValue, setText] = useState('');
    const [isError, setError] = useState(false);
    const [locations, setLocation] = useState([]);
    const textRef = useRef(null);

    const LocationItem = ({item}) => (
        <TouchableOpacity
            onPress={() => {
                console.log('loc', item);
                // userButtonCallback({id: 16});
                setLocation([]);
                navigateToNext();
            }}
            key={item.placeID}
            style={{padding: 6, marginBottom: 6}}>
            <Text style={{fontFamily: 'OpenSans-Regular', fontSize: 15}}>
                {item.primaryText}
            </Text>
        </TouchableOpacity>
    );

    const LocationSelection = () => {
        if (locations.length < 1) {
            return null;
        }
        return (
            <FlatList
                keyboardShouldPersistTaps="handled"
                style={{backgroundColor: '#fff', padding: 10}}
                data={locations}
                renderItem={LocationItem}
            />
        );
    };

    const navigateToNext = () => {
        Navigation.push(componentId, {
            component: {
                name: USER_ACCCOUNT,
                options: {
                    topBar: {
                        height: 0,
                        visible: false,
                    },
                },
            },
        });
    };

    const userButtonCallback = umsg => {
        // const _id = umsg.id;
        // _id === 8 ? navigateToNext(_id) :

        if (umsg.id === 4) {
            return signIn(umsg);
        }

        setError(false);
        if (
            umsg.id === 7 &&
            !textValue.match(
                /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
            )
        ) {
            console.log('callback', textValue);
            // check phone number
            setError(true);
            return;
        }
        if (umsg.id === 15) {
            getLocation();
            navigateToNext();
        } else {
            setmsgNumber(umsg);
            setText('');
        }
    };

    // const savePhoneNumber = umsg => {
    //     umsg.msg = umsg.msg + ': ' + textValue;
    //     setmsgNumber(umsg);
    //     setText('');
    // };

    const signIn = async umsg => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('user', userInfo);
            setmsgNumber(umsg);
            // this.setState({ userInfo });
        } catch (error) {
            setError(true);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    const getLocation = async () => {
        const location = await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        });

        console.log('loc', location);
    };

    const decideButtonOrTextInput = (umsg, index) => {
        // if (umsg.id === 4) {
        //     return (
        //         <GoogleSigninButton
        //             style={{width: 192, height: 48}}
        //             size={GoogleSigninButton.Size.Wide}
        //             color={GoogleSigninButton.Color.Dark}
        //             onPress={signIn}
        //             // disabled={this.state.isSigninInProgress}
        //         />
        //     );
        // }
        if (umsg.isTextInput) {
            const extraTextStyle =
                umsg.id === 16 ? styles.locationTextInput : null;

            umsg.id === 16
                ? RNGooglePlaces.getAutocompletePredictions(textValue, {
                      country: 'IN',
                      types: ['geocode', 'address', 'establishment', 'regions'],
                  })
                      .then(place => {
                          console.log('place, ', place);
                          setLocation(place);
                          // place represents user's selection from the
                          // suggestions and it is a simplified Google Place object.
                      })
                      .catch(error => console.log('loc', error.message))
                : null;

            return (
                <>
                    <ChatTextInput
                        extraTextStyle={extraTextStyle}
                        umsg={umsg}
                        textRef={textRef}
                        textValue={textValue}
                        setText={setText}
                    />
                    {isError ? (
                        <Text style={styles.errorMsgTxt}>
                            {'Something went wrong'}
                        </Text>
                    ) : null}
                </>
            );
        }

        if (umsg.id === 8) {
            return <OTPbuttons />;
        }

        let color = index > 0 ? styles.submitCon : styles.cancelCon;
        if (umsg.id === 1) color = styles.skipButton;

        let extraStyle =
            umsg.id === 7 || umsg.id === 9 || umsg.id === 11
                ? styles.centralButton
                : umsg.id === 12 || umsg.id === 13 || umsg.id === 14
                ? styles.genderButtons
                : umsg.id === 15
                ? styles.locateButton
                : null;
        return (
            <>
                <TouchableOpacity
                    // style={styles.userButton}
                    style={[styles.chatButton, color, extraStyle]}
                    onPress={() => userButtonCallback(umsg)}>
                    {umsg.id === 15 ? (
                        <Image
                            source={require('../assets/onBoarding/locpin3.png')}
                            style={{paddingRight: 30}}
                            resizeMode="contain"
                        />
                    ) : null}
                    <Text style={styles.buttonText}>{umsg.display}</Text>
                </TouchableOpacity>
            </>
        );
    };

    const returnUserMsg = (umsg, index) => (
        <>{decideButtonOrTextInput(umsg, index)}</>
    );

    return (
        <View
            style={
                userMsg[0].isSubmit
                    ? userMsg[0].id === 15
                        ? styles.buttonsForLocation
                        : styles.buttonsWithSubmit
                    : styles.buttonDefaultCon
            }>
            {userMsg.map(returnUserMsg)}
            {userMsg[0].id === 15 ? LocationSelection() : null}
        </View>
    );
};

export default UserButton;

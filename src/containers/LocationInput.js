import React, {useEffect, useState, useRef, useCallback} from 'react';
import {TouchableOpacity, Image, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {debounce} from 'lodash';
import GetLocation from 'react-native-get-location';
import RNGooglePlaces from 'react-native-google-places';

import {updateUserDetails} from '../store/user/actions';

import ChatTextInput from '../components/chatTexInput';
import {styles} from '../styles/userButtonStyle';

const LocationInput = props => {
    const [locations, setLocation] = useState([]);
    const [textValue, setText] = useState('');
    const textRef = useRef(null);
    let dispatch = useDispatch();
    let insertLocation = useCallback(
        location => dispatch(updateUserDetails(location)),
        [dispatch],
    );

    let userState = useSelector(s => s.user);

    let _updateUserDetails = item => {
        console.log('items', item);
        let userObj = {
            gender: userState.gender,
            city: item.primaryText || {
                longitude: item.longitude,
                latitude: item.latitude,
            },
        };
        insertLocation(userObj);
    };

    if (userState.city) {
        props.userButtonCallback(userState.city);
    }

    const LocationItem = ({item}) => (
        <TouchableOpacity
            onPress={() => {
                console.log('loc', item);
                // userButtonCallback({id: 16});
                setLocation([]);
                _updateUserDetails(item);
                props.userButtonCallback(props.userMsg[0]);
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

    useEffect(
        debounce(() => {
            if (textValue.length < 1) {
                return [];
            }
            RNGooglePlaces.getAutocompletePredictions(textValue, {
                country: 'IN',
                types: ['cities'],
            })
                .then(place => {
                    console.log('place, ', place);
                    setLocation(place);
                    // place represents user's selection from the
                    // suggestions and it is a simplified Google Place object.
                })
                .catch(error => console.log('loc', error.message));
            return () => {
                // cleanup;
            };
        }),
        [textValue],
    );

    const locateAutomatically = async () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(location => _updateUserDetails(location));
    };

    return (
        <>
            <TouchableOpacity
                style={[
                    styles.chatButton,
                    styles.cancelCon,
                    styles.locateButton,
                ]}
                onPress={locateAutomatically}>
                <Image
                    source={require('../assets/onBoarding/locpin3.png')}
                    style={{paddingRight: 30}}
                    resizeMode="contain"
                />
                <Text style={styles.buttonText}>
                    {props.userMsg[0].display}
                </Text>
            </TouchableOpacity>
            <ChatTextInput
                extraTextStyle={styles.locationTextInput}
                umsg={props.userMsg[1]}
                textRef={textRef}
                textValue={textValue}
                setText={setText}
                placeholder={'Manual Location'}
            />
            {LocationSelection()}
        </>
    );
};

export default LocationInput;

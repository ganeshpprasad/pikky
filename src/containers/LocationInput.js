import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

import {styles} from '../styles/userButtonStyle';

const LocationInput = () => {
    const [textValue, setText] = useState('');
    const [locations, setLocation] = useState([]);

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

    useEffect(() => {
        RNGooglePlaces.getAutocompletePredictions(textValue, {
            country: 'IN',
            types: ['geocode', 'address', 'establishment', 'regions'],
        })
            .then(place => {
                console.log('place, ', place);
                setLocation(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log('loc', error.message));
        return () => {
            // cleanup
        };
    }, [textValue]);

    return (
        <ChatTextInput
            extraTextStyle={styles.locationTextInput}
            umsg={umsg}
            textRef={textRef}
            textValue={textValue}
            setText={setText}
        />
    );
};

export default LocationInput;

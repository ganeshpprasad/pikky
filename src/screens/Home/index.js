import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import OnboardingSlide from './components/OnboardingSlide';

// assets
import ONE from './assets/1.png';

// comps
import LoginScreen from '../Login';

export default class Login extends React.Component {
    state = {
        goToLogin: false,
    };

    renderSlides = ({item}) => {
        return (
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    height: 100,
                    flex: 1,
                }}>
                <Text>askdjflkj</Text>
            </View>
        );
    };

    openLoginScreen = () => this.setState({goToLogin: true});

    render() {
        if (this.state.goToLogin) {
            return <LoginScreen />;
        } else {
            return (
                <View style={{flex: 1}}>
                    <Swiper style={styles.wrapper} loop={false}>
                        <OnboardingSlide
                            img={ONE}
                            text="Know your flavour & eat your heart out."
                        />
                        <OnboardingSlide text="Explore recipes from around the world." />
                        <OnboardingSlide text="Create a flavourful food profile." />
                        <OnboardingSlide text="Let us get started with an account." />
                    </Swiper>
                </View>
            );
        }
    }
}

var styles = {
    wrapper: {
        backgroundColor: 'white',
        // flex: 1,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
};

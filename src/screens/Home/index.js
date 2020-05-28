import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import OnboardingSlide from './components/OnboardingSlide';

// assets
import ONE from './assets/1.png';
import TWO from './assets/2.png';

// comps
import Login from '../Login';

export default class Home extends React.Component {
    state = {
        goToLogin: false,
    };

    openLoginScreen = () => this.setState({goToLogin: true});

    render() {
        if (this.state.goToLogin) {
            return <Login />;
        } else {
            return (
                <View style={{flex: 1}}>
                    <Swiper
                        dot={Dot}
                        activeDot={ActiveDot}
                        style={styles.wrapper}
                        loop={false}>
                        <OnboardingSlide
                            cb={this.openLoginScreen}
                            img={ONE}
                            text="Know your flavour & eat your heart out."
                        />
                        <OnboardingSlide
                            cb={this.openLoginScreen}
                            img={TWO}
                            text="Explore recipes from around the world."
                        />
                        <OnboardingSlide
                            cb={this.openLoginScreen}
                            img={ONE}
                            text="Create a flavourful food profile."
                        />
                        <OnboardingSlide
                            cb={this.openLoginScreen}
                            img={TWO}
                            text="Let us get started with an account."
                        />
                    </Swiper>
                </View>
            );
        }
    }
}

const ActiveDot = (
    <LinearGradient
        colors={[
            'rgb(255, 230, 72)',
            'rgb(255, 125, 99)',
            'rgb(255, 115, 102)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
        }}
    />
);

const Dot = (
    <View
        style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
            borderColor: 'rgb(255, 115, 102)',
            borderWidth: 2,
        }}
    />
);

var styles = {
    wrapper: {
        backgroundColor: 'white',
        // flex: 1,
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
};

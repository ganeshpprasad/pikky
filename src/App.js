import {Navigation} from 'react-native-navigation';

// store
import {withReducer, withReduxProvider} from './store';

// screens
import {LOGIN, USER_ACCCOUNT, HOME} from './screens';

import Login from './screens/Login';
import Home from './screens/Home';
import UserAccount from './screens/UserAccount';

const Screens = new Map();
Screens.set(LOGIN, Login);
Screens.set(HOME, Home);

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

const App = () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: HOME,
                            options: {
                                topBar: {
                                    height: 0,
                                    visible: false,
                                },
                            },
                        },
                    },
                ],
            },
        },
    });
};

export default App;

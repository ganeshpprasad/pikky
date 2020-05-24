import {Navigation} from 'react-native-navigation';

// store
import {withReducer, withReduxProvider} from './store';

// screens
import {LOGIN, USER_ACCCOUNT} from './screens';

import Login from './screens/Login';
import UserAccount from './screens/UserAccount';

const Screens = new Map();
Screens.set(LOGIN, Login);

Screens.forEach((C, key) => {
    Navigation.registerComponent(key, () => withReduxProvider(C), () => C);
});

Navigation.registerComponent(USER_ACCCOUNT, () => UserAccount);

const App = () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: LOGIN,
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

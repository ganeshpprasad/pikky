import {Navigation} from 'react-native-navigation';

import Landing from './screens/Login';
import UserAccount from './screens/UserAccount';
import {LOGIN, USER_ACCCOUNT} from './screens/constants';

Navigation.registerComponent(LOGIN, () => Landing);
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

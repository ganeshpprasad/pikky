import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {PersistGate} from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import {SafeAreaView} from 'react-native';

import reducer from './store/reducers';
import saga from './store/sagas';

const persistConfig = {
    key: 'rootKeyPersist',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (__DEV__) {
    middlewares.push(createLogger());
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);

sagaMiddleware.run(saga);

export const withReduxProvider = C => props => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SafeAreaView>
                <C {...props} />
            </SafeAreaView>
        </PersistGate>
    </Provider>
);

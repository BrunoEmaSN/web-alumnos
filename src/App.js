import React from 'react';
import { Provider } from 'react-redux';
import { AppRoute } from './Routers/AppRoute';
import { store } from './Store';

export const App = () => {
    return (
        <div>
            <Provider store={ store }>
                <AppRoute />
            </Provider>
        </div>
    )
}
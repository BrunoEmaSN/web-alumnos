import React from 'react';
import { Provider } from 'react-redux';
import { MainPage } from './Pages/MainPage';
import { store } from './Store';
import './Styles/styles.css';

export const App = () => {
    return (
        <Provider store={ store }>
            <MainPage/>
        </Provider>
    );
}
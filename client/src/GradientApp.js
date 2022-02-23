import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { AppRouter } from './router/AppRouter'

export const GradientApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}

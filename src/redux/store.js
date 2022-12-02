import { configureStore } from "@reduxjs/toolkit";
import listReducer from './reducers/listReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
        list: listReducer,
    },
    middleware: [
        thunk,
        promiseMiddleware,
        promise,
        logger,
    ]
});
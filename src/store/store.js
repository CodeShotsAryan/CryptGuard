import userStore from './userStore.js'
import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        User: userStore
    }
});

export default store;
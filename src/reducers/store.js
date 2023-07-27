import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "../reducers/authSlice";


//Specifies the configuration options for Redux data persistence//
const persistConfig = {
    //Key under which the persisted state will be stored in the storage. In this case, it's set to "root"
    key: "root",
    //The version of the persisted state. It helps with migration when the data structure changes.
    version: 1,
    //The storage engine to be used for persisting the state. It uses the storage object imported from redux-persist/lib/storage.
    storage,
};

//The reducers object is created using combineReducers from Redux Toolkit.
const reducers = combineReducers({
    auth: authSlice,
    
})

//The persistedReducer is created using persistReducer from Redux Persist. It takes the persistConfig and the combined reducers as arguments.
const persistedReducer = persistReducer(persistConfig, reducers);

//The Redux store is created using configureStore from Redux Toolkit.//
export const store = configureStore({
    //The persistedReducer created in the previous step.
    reducer: persistedReducer,
    //The middleware function that customizes the behavior of the store. It uses getDefaultMiddleware and configures the serializableCheck option to ignore specific actions (FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, and REGISTER) that are not serializable.//
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);

// The persistor is created using persistStore from Redux Persist. It takes the store as an argument and creates a persistor object that can be used for data rehydration.

// This code sets up a Redux store with data persistence enabled. The authSlice reducer is combined with other reducers using Redux Toolkit's combineReducers, and the combined reducers are passed to Redux Persist's persistReducer to create a persisted reducer. The store is then configured using configureStore, and the persistor object is created using persistStore.
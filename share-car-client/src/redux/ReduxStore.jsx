import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserSlice.jsx';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import DriverSlice from './DriverSlice.jsx';
import CitySlice from './CitySlice.jsx';
import TripDetailSlice from './TripDetailSlice.jsx';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
};
const rootReducer = combineReducers({ user: UserSlice, driver: DriverSlice, city: CitySlice, trip: TripDetailSlice });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export let persistor = persistStore(store);

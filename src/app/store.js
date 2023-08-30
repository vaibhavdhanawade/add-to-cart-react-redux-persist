import { combineReducers, configureStore, } from '@reduxjs/toolkit';
import { persistReducer, persistStore,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import productsReducer  from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
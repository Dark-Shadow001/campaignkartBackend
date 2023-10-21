import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import notificationsReducer from "./reducers/notificationReducer";
import generalReducer from "./reducers/generalReducer";
import storage from "redux-persist/lib/storage";

// Define persist configuration
let persistConfig = {
  key: "root",
  storage: storage as any, // To be set conditionally later
};

// Combine existing reducers
const rootReducer = combineReducers({
  notifications: notificationsReducer,
  general: generalReducer,
});

if (typeof window !== "undefined") {
  // Client-side-only code
  const storage = require("redux-persist/lib/storage").default;
  persistConfig.storage = storage;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
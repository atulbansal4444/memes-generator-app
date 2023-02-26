import React from "react";
import { createRoot } from "react-dom/client";
import App from "./componets/App";
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from "react-redux";
// import rootReducers from './reducers';

// const store = configureStore({ reducer: rootReducers });
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Provider store={store}>
  <App />);

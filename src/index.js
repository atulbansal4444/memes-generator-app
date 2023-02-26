import React from "react";
import { createRoot } from "react-dom/client";
import App from "./componets/App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import { fetchMemes } from "./actions/fetch.js";
import thunk from "redux-thunk";

const store = configureStore({reducer: rootReducers, middleware: [thunk]});
const container = document.getElementById("root");
const root = createRoot(container);

store.dispatch(fetchMemes());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

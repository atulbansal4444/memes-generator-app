import React from "react";
import { createRoot } from "react-dom/client";
import AppContainer from "./componets/AppContainer.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducers from "./reducers";
import { fetchMemes } from "./actions/fetch.js";

const store = configureStore({ reducer: rootReducers});
const container = document.getElementById("root");
const root = createRoot(container);
store.dispatch(fetchMemes());

root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

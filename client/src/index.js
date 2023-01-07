import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore(
	{ reducer: rootReducer },
	composeWithDevTools(applyMiddleware(thunk))
);

render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

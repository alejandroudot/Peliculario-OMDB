import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "../src/store/store";
import theme from "./theme/theme";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

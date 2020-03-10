import React from "react";   
import { Global, css } from "@emotion/core";
import { Provider } from "react-redux";
import Globals from "styles/globals";
import store from "store";

const App = () => (
  <>
  <Global styles={css`${Globals}`} />
     
  <Provider store={store}>
  <div>Hola react</div>
  </Provider>
  </>
);

export default App;

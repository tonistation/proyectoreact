import React from "react";   
import { Global, css } from "@emotion/core";
import Globals from "styles/globals";

const App = () => (
  <>
  <Global styles={css`${Globals}`} />
     <div>Hola react</div>
  </>
);

export default App;

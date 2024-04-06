import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";

//to avoid class name collision between apps
const generateClassName = createGenerateClassName({
  productionPrefix: "dash",
});

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Dashboard />
      </StylesProvider>
    </div>
  );
};

import React from "react";
import { Provider } from "mobx-react";
import StateConstructor from "../interface/stateConstructor";
export default function mobxProvider(state: StateConstructor) {
  const initialState = new state();
  return (Comp: any): any => {
    class StatusComp extends React.Component {
      render() {
        return React.createElement(
          Provider,
          { store: initialState },
          React.createElement(Comp, this.props)
        );
      }
    }
    return StatusComp;
  };
}

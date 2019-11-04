import BaseState from "../states/base.state";

export default interface StateConstructor {
  new (): BaseState;
}

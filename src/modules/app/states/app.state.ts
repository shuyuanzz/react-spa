import BaseState from "../../../infrastructure/states/base.state";

export default class Appstate extends BaseState {
  public test: String;
  constructor() {
    super();
    this.test = "hello react";
  }
}

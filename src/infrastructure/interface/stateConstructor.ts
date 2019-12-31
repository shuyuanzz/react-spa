import BaseState from '../states/base.state';

export interface StateConstructor {
	new (): BaseState;
}

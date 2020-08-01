import { Action } from 'redux';

export default interface BaseAction<T, P> extends Action {
  readonly type: T;
  readonly payload?: P;
}

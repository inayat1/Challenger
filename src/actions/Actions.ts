import Actions from '../actions/ActionTypes';
import BaseAction from './BaseAction';
import { NamePayload } from '../types/ActionPayloadTypes'; 

export const changeName = (name: string): BaseAction<Actions, NamePayload> => {
    return{
      type: Actions.CHANGE_NAME,
      payload: {
          name
      }
    };
}
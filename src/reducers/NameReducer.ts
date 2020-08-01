import Actions from '../actions/ActionTypes';
import BaseAction from '../actions/BaseAction';
import { NamePayload } from '../types/ActionPayloadTypes'; 
import { NameReducerType } from '../store/InitialState';

const NameReducerState: NameReducerType = {
    name: 'Inayat'
}


const NameReducer = (state: NameReducerType = NameReducerState, action: BaseAction<Actions, NamePayload>): NameReducerType => {
    switch (action.type) {
        case Actions.CHANGE_NAME:
          return {
            ...state,
            name: action.payload && action.payload.name || '',
          }
        default:
          return state;
      }
}

export default NameReducer;
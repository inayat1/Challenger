import Actions from '../actions/ActionTypes';
import BaseAction from './BaseAction';
import { NamePayload } from '../types/ActionPayloadTypes';
import makeApiRequest, { ApiRequestType, Method } from '../api/ApiUtil';
import { Hostname, UrlPath } from '../api/UrlConstants';

export const changeName = (name: string): BaseAction<Actions, NamePayload> => {
    return{
      type: Actions.CHANGE_NAME,
      payload: {
          name
      }
    };
}

export const userRegister = (payload: any): (dispatch:any) => Promise<any> => {
    const data: ApiRequestType = {
        method: Method.POST,
        payload,
        url: `${Hostname}${UrlPath}`
    }
    return (dispatch: any): Promise<any> => {
        return makeApiRequest(data).then((data) => {
            return Promise.resolve(data);
        }).catch((error) => {
            return Promise.reject(error);
        });
    }
}
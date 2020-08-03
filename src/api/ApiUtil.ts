export interface ApiRequestType {
    method?: string,
    url: string,
    payload?: Record<string, any>
}

export interface Options {
    method?: string,
    headers?: Record<string, string>,
    body?: string
}

export enum Method {
    POST = 'POST',
    GET = 'GET'
}

const makeApiRequest = (data: ApiRequestType): Promise<any> => {
    let options: Options = {};
    if(data.method === Method.GET) {
        options = {}
    } else {
        options = {
            method: data.method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data.payload ? JSON.stringify(data.payload) : ''
        }
    }
    return fetch(data.url, options)
    .then(response => response.json())
    .catch(error => error);
}

export default makeApiRequest;
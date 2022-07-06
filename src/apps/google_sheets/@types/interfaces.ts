export interface IAuth {
    client_id: string,
    client_secret: string,
    redirect_uri?: string,
    host?: string,
    port?: number,
    path?: string
}


export interface IAccessToken {
    client_id: string,
    redirect_uri: string,
    client_secret: string,
    code: string
}


export interface IGetSheet {
    access_token: string,
    sheet_id: string
}


export interface IAuthLink {
    client_id: string,
    response_type: string,
    access_type: string,
    state: string,
    redirect_uri?: string,
    host?: string,
    port?: number,
    path?: string
}


export interface IAuthCheck {
    access_token: string,
    refresh_token?: string
}
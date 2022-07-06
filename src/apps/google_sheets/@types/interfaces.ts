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
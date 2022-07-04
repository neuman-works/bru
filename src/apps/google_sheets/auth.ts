import params from './params'
import { constants } from './constants'
import { EAppType } from '@src/@types'
import axios from 'axios'


const authorize_google_sheets = {
    name: "authorize",
    description: "",
    version: "0.0.1",
    type: EAppType.AUTHORIZATION,
    params: [
        params.client_id,
        params.redirect_uri,
        params.state
    ],
    run(args: any): string {

        const tkn_request_url = constants.endpoints.auth +
            `?client_id=${args.client_id}` +
            `&redirect_uri=${args.redirect_uri}` +
            `&response_type=code` +
            `&scope=${constants.scope.spreadsheets}` +
            `&state=${args.state}` +
            `&access_type=offline`

        console.log(tkn_request_url)

        return tkn_request_url
    }
}

const fetch_access_token = {
    name: "Fetch Access Token",
    description: "",
    version: "0.0.1",
    type: EAppType.AUTHORIZATION,
    params: [
        params.client_id,
        params.redirect_uri,
        params.client_secret,
        params.code
    ],
    async run(params: any): Promise<any> {
        const request_data = {
            ...params,
            grant_type: 'authorization_code'
        }
        var res, err = null;

        await axios.post(
                constants.endpoints.token, 
                request_data
            )
            .then((resp) => res = resp.data)
            .catch((er) => err = er.response.data)

        return res || err
    }
}

export {
    authorize_google_sheets,
    fetch_access_token
}
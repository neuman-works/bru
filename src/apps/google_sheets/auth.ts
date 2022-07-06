import params from './params'
import { endpoints, scope } from './constants'
import { EAppType } from '@src/@types'
import axios from 'axios'
import { IAuthLink, IAuthCheck } from './@types'
const server = require('server')
const { get } = server.router


const authorize = (args: any) => new Promise(async (resolve, reject) => {
    const redirect_uri = 
        args.redirect_uri || `${args.host}:${args.port}/${args.path}`
    
    server({ port: args.port }, [
        get(`/${args.path}`, 
            (ctx: any) => {
                getAccessToken.run({
                    ...args,
                    ...ctx.query,
                    redirect_uri,
                    grant_type: 'authorization_code'
                })
                .then((res) => resolve({ ...res, ...ctx.query }))
                .then(() => process.exit())
                .catch((err) => reject(err))

                return 'you are now signed in.'
            }
        )
    ])
})


const isAuthorized = {
    name: "Is Authorized",
    description: "Check if Authorized",
    type: EAppType.AUTHORIZATION,
    params: [],
    async run(args: IAuthCheck): Promise<boolean> {
        var result = false
        
        await axios
            .get(`${endpoints.auth_check}?fields=user&access_token=`+args.access_token)
            .then((res: any) => result = (res.data.user&&res.data.user.me?true:false))

        return result
    }
}


const getAuthLink = {
    name: "Get Authorization Link",
    description: "",
    version: "0.0.1",
    type: EAppType.AUTHORIZATION,
    params: [
        params.client_id,
        params.redirect_uri,
        params.state
    ],
    run(args: IAuthLink): string {
        const redirect_uri = 
            args.redirect_uri || `${args.host}:${args.port}/${args.path}`

        const tkn_request_url = endpoints.auth +
            `?client_id=${args.client_id}` +
            `&redirect_uri=${redirect_uri}` +
            `&response_type=${args.response_type}` +
            `&scope=${scope.spreadsheets.join('+')}` +
            `&state=${args.state}` +
            `&access_type=${args.access_type}`

        return tkn_request_url
    }
}


const getAccessToken = {
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
    async run(args: any): Promise<any> {
        var res, err = null;

        await axios
            .post(endpoints.token, args)
            .then((resp) => res = resp.data)
            .catch((er) => err = er.response.data)

        return res || err
    }
}

export {
    authorize,
    isAuthorized,
    getAuthLink,
    getAccessToken
}
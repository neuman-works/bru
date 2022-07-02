import params from './_params'
import { EAppType as type } from '@src/_types'


export default {
    "type": type.AUTHENTICATION,
    "version": "0.0.1",
    "functions": {
        "auth": {
            "type": "CODE",
            "run": (token: Object) => {
                console.log(token);
            }
        },
        "authorizeApp": {
            "meta": {
                "name": "Google Authorization",
                "description": "",
                "params": [
                    params.client_id,
                    params.redirect_uri,
                    params.response_type,
                    params.scope,
                    params.state
                ]
            },
            "method": "GET",
            "headers": {
                
            },
            "response": {
                
            }
        },
        "getAuthToken": {
            "meta": {
                "name": "Auth token request",
                "description": "",
                params: [

                ]
            },
            "method": "POST"
        },
        "getRefreshToken": {
            "meta": {
                "name": "Refresh auth token",
                "description": "",
                params: [
                    
                ]
            },
            "method": "POST"
        }
    }
}
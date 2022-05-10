import params from './_params'


export default {
    "type": "AUTHENTICATION",
    "version": "0.0.1",
    "functions": {
        "authorization": {
            "info": {
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
        "auth_token": {
            "info": {
                "name": "Auth token request",
                "description": "",
                params: [

                ]
            },
            "method": "POST"
        },
        "refresh_token": {
            "info": {
                "name": "Refresh auth token",
                "description": "",
                params: [
                    
                ]
            },
            "method": "POST"
        }
    }
}
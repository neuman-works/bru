// TODO: implement these functions

const get_user = () => {
    return {
        username: "user",
        email: "mail@xyz.com"
    }
}


const get_user_app_auth = () => {
    return {
        username: "user",
        app: "google_sheets",
        authorized: true,
        token: {
            access_token: "",
            expires_in: 3599,
            refresh_token: "",
            scope: "https://www.googleapis.com/auth/spreadsheets",
            token_type: "Bearer"
        }
    }
}


export {
    get_user,
    get_user_app_auth
}
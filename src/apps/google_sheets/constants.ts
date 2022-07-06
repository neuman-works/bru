const scope = {
    spreadsheets: [
        'https://www.googleapis.com/auth/drive.readonly',
        'https://www.googleapis.com/auth/spreadsheets'
    ],
    spreadsheets_readonly: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
}

const endpoints = {
    auth: "https://accounts.google.com/o/oauth2/v2/auth",
    auth_check: "https://www.googleapis.com/drive/v3/about",
    api: "https://sheets.googleapis.com/",
    token: "https://oauth2.googleapis.com/token",
    path: "v4/spreadsheets/"
}

const docs = {
    url: "https://developers.google.com/sheets/"
}



export {
    scope,
    endpoints,
    docs
}
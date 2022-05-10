var constants = {
    "scope": [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/spreadsheets.readonly"
    ]
}

export default {
    "id": {
        "name": "Spreadsheet ID",
        "type": "string",
        "description": "It's the ID of your Spreadsheet that you can find in its URL. (https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit#gid=0)"
    },
    "scope": {
        "name": "Permission scope",
        "type": "enum", /* enum(uration) as in pick from one the values in $.meta.options */
        "meta": {
            "options": [
                constants.scope[0]
            ]
        }
    },
    "client_id": {
        "name": "Client ID",
        "description": "Your Google Developer Client ID",
        "type": "string",
        "secret": true,
        "secret_env_var": "GOOGLE_SHEETS_CLIENT_ID" /* the name of the enviroment variable that stores this secret */
    },
    "redirect_uri": {
        "name": "Redirect URI",
        "description": "This is where your token or code would be posted to."
    },
    "response_type": {
        "name": "Response type",
        "description": "",
        "type": "enum",
        "meta": {
            "options": [ "code", "token" ]
        }
    },
    "state": {
        "name": "state",
        "description": "",
        "type": "string"
    }
};
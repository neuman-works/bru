import { constants } from "./constants"


export default {
    "id": {
        name: "Spreadsheet ID",
        type: "string",
        descr: "It's the ID of your Spreadsheet that you can find in its URL. (https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit#gid=0)"
    },
    "scope": {
        name: "Permission scope",
        type: "enum", /* enum(uration) as in pick from one the values in $.meta.options */
        meta: {
            "options": [
                constants.scope.spreadsheets
            ]
        }
    },
    "client_id": {
        name: "Client ID",
        descr: "Your Google Developer Client ID",
        type: "string",
        secret: true,
        secret_env_var: "GOOGLE_SHEETS_CLIENT_ID" /* the name of the enviroment variable that stores this secret */
    },
    "redirect_uri": {
        name: "Redirect URI",
        descr: "This is where your token or code would be posted to."
    },
    "response_type": {
        name: "Response type",
        descr: "",
        type: "enum",
        meta: {
            options: [ "code", "token" ]
        }
    },
    state: {
        name: "state",
        descr: "",
        type: "string"
    },
    client_secret: {
        name: "client_secret",
        descr: "",
        type: "string"
    },
    code: {
        name: "code",
        descr: "",
        type: "string"
    },
    access_token: {
        name: "access_token",
        descr: "",
        type: "string"
    },
    sheet_id: {
        name: "sheet_id",
        descr: "",
        type: "string"
    }
};
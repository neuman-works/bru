import actions from './actions';
import triggers from './triggers';


export default {
    "info": {
        "name": "Google Sheets",
        "app_name": "google_sheets",
        "developer": "Google",
        "description": "Google Sheets is a spreadsheets application on the cloud.",
        "license": {
            "name": "Creative Commons Attribution 3.0",
            "url": "http://creativecommons.org/licenses/by/3.0/"
        },
        "terms_of_service": "https://developers.google.com/terms/",
        "title": "Google Sheets API",
        "app_version": "v4",
        "bru_version": "0.0.1",
        "integration_type": "api",
        "authorization_required": true,
        "authentication_required": false,
        "actions": Object.keys(actions.functions),
        "triggers": Object.keys(triggers.functions)
    },
    "endpoints": {
        "auth": "https://accounts.google.com/o/oauth2/v2/auth",
        "api": "https://sheets.googleapis.com/v4/",
        "token": "https://oauth2.googleapis.com/token"
    },
    "external_docs": {
        "url": "https://developers.google.com/sheets/"
    },
    "tags": ["google", "google sheets", "spreadsheets"]
}
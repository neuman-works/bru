import actions from './actions';
import triggers from './triggers';


export default {
    "meta": {
        "name": "Google Sheets",
        "app_name": "google_sheets",
        "developer": "Google",
        "description": "Google Sheets is a spreadsheets application on the cloud.",
        "title": "Google Sheets API",
        "app_version": "v4",
        "bru_version": "0.0.1",
        "integration_type": "api",
        "auth_type": "LT_TOKEN_REFRESH",
        "actions": Object.keys(actions.functions),
        "triggers": Object.keys(triggers.functions),
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
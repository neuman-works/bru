import actions from './actions/actions'
import { triggers } from './triggers/triggers'
import * as methods from './auth'


const app = {
    name: "Google Sheets",
    app_name: "google_sheets",
    developer: "Google",
    description: "Google Sheets is a spreadsheets application on the cloud.",
    title: "Google Sheets API",
    app_version: "v4",
    bru_version: "0.0.1",
    integration_type: "api",
    auth_type: "LT_TOKEN_REFRESH",
    actions: Object.keys(actions),
    triggers: Object.keys(triggers),
    methods: {
        ...methods,
        ...actions,
        ...triggers
    },
    credentials: {},
    tags: [
        "google", 
        "google sheets", 
        "spreadsheets"
    ]
}

export default app
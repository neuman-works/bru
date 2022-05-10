import airtable from './airtable';
import google_gmail from './google_gmail';
import google_sheets from './google_sheets';
import twitter from './twitter';


// TODO: get the following from a database
const apps = () => {
    return {
        "version": "0.0.1", // version is updated every time an app (below) is updated
        "apps": [{
                ...airtable.info
            }, {
                ...google_sheets.info
            }, {
                ...google_gmail.info
            }, {
                ...twitter.info
            }
        ]
    }
}


// TODO: get app from a database
const find = (app_name: String) => {
    try {
        let app = require('./'+app_name);
        return app;
    } catch (error) {
        console.log(error)
        return null;
    }
}


module.exports = {
    apps,
    find
}
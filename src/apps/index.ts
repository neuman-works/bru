import airtable from './airtable';
import google_gmail from './google_gmail';
import google_sheets from './google_sheets';
import twitter from './twitter';


// TODO: get the following from a database
const apps = () => {
    return {
        "version": "0.0.1", // version is updated every time an app (below) is updated
        "apps": [{
                ...airtable.meta
            }, {
                ...google_sheets.meta
            }, {
                ...google_gmail.meta
            }, {
                ...twitter.meta
            }
        ]
    }
}


// TODO: get app from a database
const find_app = (app_name: String) => {
    try {
        let app = require('./'+app_name);
        return app;
    } catch (error) {
        console.log(error)
        return null;
    }
}


// TODO: get function from a database
const find_fn = (app_name: String, fx_name: String) => {
    try {
        let actions = require('./'+app_name+'/actions');
        let triggers = require('./'+app_name+'/triggers');

        if (
            actions 
            && actions.default
            && actions.default.functions
            && actions.default.functions[fx_name+'']
        ) {
            return actions.default.functions[fx_name+''];
        }
        
        if (
            triggers 
            && triggers.default 
            && triggers.default.functions
            && triggers.default.functions[fx_name+'']
        ) {
            return triggers.default.functions[fx_name+''];
        }
        
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}


// TODO: get function from a database
const find_auth = (app_name: String) => {
    try {
        let auth = require('./'+app_name+'/_auth');

        if (auth && auth.default) {
            return auth.default;
        }
        
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}


module.exports = {
    apps,
    find_app,
    find_fn,
    find_auth
}
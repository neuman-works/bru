var { find_app, find_fn, find_auth } = require('@src/apps');
var { get_user_app_auth } = require('@src/_user');
var { api_runner } = require('./engines/api');


const runner = (app: String, fn: String) => {
    let func = find_fn(app, fn);
    let auth = find_auth(app);

    if (!func) { return null; }

    if (func.meta.auth_required) {
        let user = get_user_app_auth();

        // TODO: send app-not-authorized error to user
        if (!user.authorized) { return false; }

        // run the auth function
        auth.functions.auth.run(user.token);

        // execute the function
        api_runner(func);
    }
    
    return true;
}


module.exports = {
    runner
}
# Google Sheets

The code below shows you how to connect with google sheets and fetch a sheet data.

Here are some things yuo should know:
1. Brú creates a `temporary server` to aid in user auth.
2. `host`, `port` & `path` are used to create a redirect url, which is fed to google auth.
3. Once you use the user auth link to authorize a user, an auth variable is sent back to you which you should save in long term storage.



        require('module-alias/register')
        import sheets from '@apps/google_sheets'

        const credentials = {
            client_id: "YOUR-CLIENT-ID",
            client_secret: "YOUR-CLIENT-SECRET",
            state: "STATE-ID-YOU-GENERATE",
            host: 'http://localhost', port: 8080, path: 'google_sheets_auth',
            response_type: 'code', access_type: 'offline'
        }

        const params = {
            sheet_id: 'YOUR-SHEET-ID'
        }

        const auth = {
            access_token: 'SAVED-ACCESS-TOKEN'
        }

        sheets.isAuthorized
            .run({ ...credentials, ...auth })
            .then((isAuthorized) => {
                if (isAuthorized) {
                    sheets.getSpreadsheet.run({
                        access_token: auth.access_token,
                        sheet_id: params.sheet_id
                    })
                    .then((res) => console.log(res))
                } else {
                    console.log("User auth link: ", sheets.getAuthLink.run(credentials))

                    sheets
                        .authorize(credentials)
                        .then(async (auth: any) => {
                            console.log("Auth codes here (save them):", auth)
                            sheets.getSpreadsheet.run({
                                access_token: auth.access_token,
                                sheet_id: params.sheet_id
                            })
                            .then((sheet) => console.log(sheet))
                        })
                }
            })

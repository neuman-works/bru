import params from '../params';
import axios from 'axios'


export default {
    getSpreadsheet: {
        name: "Fetch Spreadsheet",
        description: "Fetch a spreadsheet by its ID.",
        version: "0.0.1",
        type: "ACTION",
        auth_required: true,
        params: [
            params.sheet_id,
            params.access_token
        ],
        async run(args: any): Promise<any> {
            const request = {
                headers: {
                    Authorization: `Bearer ${args.access_token}`
                },
                params: {
                    includeGridData: true,
                    key: args.key
                }
            }
            var res, err

            await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${args.sheet_id}`, 
                request
            )
            .then((response) => res = response.data)
            .catch((error) => err = error.response.data)

            return res || err
        }
    }
}
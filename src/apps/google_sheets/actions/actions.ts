import { IGetSheet } from '../@types';
import axios from 'axios'
import { endpoints } from '../constants';


export default {
    getSpreadsheet: {
        name: "Fetch Spreadsheet",
        description: "Fetch a spreadsheet by its ID.",
        version: "0.0.1",
        type: "ACTION",
        auth_required: true,
        async run(args: IGetSheet): Promise<any> {
            const request = {
                headers: {
                    Authorization: `Bearer ${args.access_token}`
                },
                params: {
                    includeGridData: true
                }
            }
            var res, err

            await axios.get(
                endpoints.api + endpoints.path + args.sheet_id, 
                request
            )
            .then((response) => res = response.data)
            .catch((error) => err = error.response.data)

            return res || err
        }
    }
}
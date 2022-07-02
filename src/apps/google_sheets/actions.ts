import params from './_params';

export default {
    "version": "0.0.1",
    "type": "ACTION",
    "functions": {
        "getSpreadsheet": {
            "meta": {
                "name": "Fetch Spreadsheet",
                "description": "Fetch a spreadsheet by its ID.",
                "type": "ACTION",
                "auth_required": true,
                "params": [
                    params.id
                ]
            },
            "type": "SPEC",
            "method": "GET",
            "headers": {
                
            },
            "response": {

            }
        },
        "getAllSheets": {
            "meta": {
                "name": "Get all spreadsheets from Google Drive.",
                "description": "",
                "type": "ACTION",
                "params": []
            },
            "auth_required": true,
            "type": "CODE",
            "run": () => {
                
            }
        }
    }
}
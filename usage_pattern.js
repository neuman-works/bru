bru.initialize();


/* 
    [
        {
            name: “google_sheets”,
            version: 0.0.1
        }, {
            name: “twitter”,
            version: 0.0.1
        }
    ]
*/
bru.apps(0, 500);


/* 
    { 
        name: “Google Sheets”, 
        key: "google_sheets",
        version: 0.0.1, 
        params: [], 
        actions: [], 
        triggers: [] 
    } 
*/
bru.app("google_sheets"); 


/* 
    { 
        success: true, 
        results: {
            "a": 25
        }
    }
    OR
    {
        success: false,
        missing: ["", "", ""]
    }
*/
bru.app("google_sheets").action("fetch_sheets", "param");
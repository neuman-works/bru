import { IApp } from './_types'
const fs = require('fs')

var bru: IApp;

interface IBru {
    apps: Function
}

export default class Bru implements IBru {
    /*
        @description: Takes credentials, variables etc. to initializes Bru & activate apps
        @params: config_file: the location of the config file in the local filesystem
        @returns: object with the initialization results
    */
    initialize(config_file: String) {
        // fs.readFile(config_file);
        // find all correspoding apps
        // create new apps objects for each folder
        bru.apps = [];
    }


    /*
        @description:
        @params:
        @returns:
    */
    apps() {
        return [];
    }
}
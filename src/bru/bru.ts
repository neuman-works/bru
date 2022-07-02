import { IAppSrc, IBru } from '@src/_types'
import { App } from '@apps/index'
import fs from 'fs'


export default class Bru implements IBru {
    // TODO: async file streaming
    constructor(configFile: string) {
        const appConfig = JSON.parse(fs.readFileSync(configFile, 'utf-8'));

        console.log(appConfig)
    }


    app(appName: string): IAppSrc {
        return new App(appName);
    }


    apps(app: string) {
        return [];
    }
}
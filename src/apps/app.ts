import { IAppSrc } from '@src/_types'


export default class App implements IAppSrc {
    name: string

    constructor(name: string) {
        this.name = name
    }

    method(methodName: string, ...args: any) {
        
    }
}
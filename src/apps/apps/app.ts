import { IApp } from '@src/_types'


export class App implements IApp {
    name: String
    version: Number

    constructor(name: String, version: Number) {
        this.name = name
        this.version = version
    }
}
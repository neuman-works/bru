import { IDriver } from '@src/_types'


export class Apps {
    private driver: IDriver;

    constructor(driver: IDriver) {
        this.driver = driver;
    }
}
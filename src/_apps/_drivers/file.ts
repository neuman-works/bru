import { IDriver } from '@src/_types'


export class FileDriver implements IDriver {

}


export function fileDriverFactory() {
    return new FileDriver()
}
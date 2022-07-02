import { Bru } from '../src'

const bru = new Bru('./config.json')

let google_sheets = bru.app('google_sheets')

google_sheets.method('get_sheets', 0, 50)
    
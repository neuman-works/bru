import { fileDriverFactory } from './_drivers'
import { Apps } from './apps'

let useFileDriver = fileDriverFactory()

export default new Apps(useFileDriver)
export interface IApp {
    name: String,
    version: Number
}

export interface IMethodDef {
    name: string,
    description: string,
    version: string,
    type: number,
    run: Function
}

export interface IMethodObj {
    [key: string]: IMethodDef
}

export interface IAppDefinition {
    name: string,
    methods: IMethodObj
}

export interface IAppSrc {
    app: IAppDefinition,
    m: Function
}


export interface IBru {
    app: Function,
    apps: Function
}


export interface IDriver {
    
}
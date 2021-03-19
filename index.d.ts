
export class MissionControl {
    constructor(url: string, token?: string);
    append(key:string, data):Promise<any>;
    history(key:string, limit?:number):Promise<any[]>;
}

export class Backend {
    constructor(url: string, token: string);
    getDevices():Promise<any[]>;
    claimDevice(secret:string):Promise<any>;
    unclaimDevice(uid:string):Promise<any>;
    getRoutines():Promise<any[]>;
    getDeviceRoutines(uid:string):Promise<any[]>;
    createRoutine(data):Promise<any>;
    bindRoutine(uid:string, name:string):Promise<any>;
    unbindRoutine(uid:string, name:string):Promise<any>;
    sendMessage(uid:string, message):Promise<any>;
}

export class BackendAdmin {
    constructor(url: string, secret: string);
    getUser(uid:string):Promise<any>;
    getDevice(secret:string):Promise<any>;
    getUnclaimedDevices():Promise<any[]>;
    createDevice(data):Promise<any>;
}

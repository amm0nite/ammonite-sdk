
export class MissionControl {
    constructor(token?: string);
    append(key:string, data, next?:(err:Error|null, event?) => void);
    history(key:string, limit?:number, next?:(err:Error|null, events?:any[]) => void);
}

export class Backend {
    constructor(token?: string);
    getDevices(next?:(err:Error|null, devices?:any[]) => void);
    claimDevice(secret:string, next?:(err:Error|null, device?) => void);
    getRoutines(next?:(err:Error|null, routines?:any[]) => void);
    getDeviceRoutines(uid:string, next?:(err:Error|null, routines?:any[]) => void);
    createRoutine(data, next?:(err:Error|null, routine?) => void);
    bindRoutine(uid:string, name:string, next?:(err:Error|null) => void);
    unbindRoutine(uid:string, name:string, next?:(err:Error|null) => void);
    sendMessage(uid:string, message, next?:(err:Error|null) => void);
}

export class BackendAdmin {
    constructor(token?: string);
    getUser(uid:string, next?:(err:Error|null, user?) => void);
    getDevice(secret:string, next?:(err:Error|null, device?) => void);
    getUnclaimedDevices(next?:(err:Error|null, devices?:any[]) => void);
    createDevice(data, next?:(err:Error|null, device?) => void);
}

export class Timelapse {
    constructor(token?: string);
    getCapture(channel:string, next?:(err: Error|null, bytes?) => void);
    getChannels(next?:(err:Error|null, channels?:any[]) => void);
}
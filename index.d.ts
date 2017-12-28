
export class Cloud {
    constructor(token?: string);
    fetchJobs(options, next?:(err: any|null, jobs:any[]) => void);
    fetchJob(id: number, next?:(err:any|null, job) => void);
    createJob(job, next?:(err:any|null, job?) => void);
}

export class MissionControl {
    constructor(token?: string);
    append(key:string, data, next?:(err:any|null, event?) => void);
    history(key:string, next?:(err:any|null, events:any[]) => void);
    load(key:string, next?:(err:any|null, value) => void);
    save(key:string, value, next?:(err:any|null, value?) => void);
    send(message, options, next?:(err:any|null, message?) => void);
}

export class Backend {
    constructor(token?: string);
    getDevice(secret:string, next?:(err:any|null, device?) => void);
    createDevice(data, next?:(err:any|null, device?) => void);
    getDeviceRoutines(uid:string, next?:(err:any|null, routines?) => void);
    createRoutine(data, next?:(err:any|null, routine?) => void);
    bindRoutine(uid:string, name:string, next?:(err:any|null) => void);
    unbindRoutine(uid:string, name:string, next?:(err:any|null) => void);
}
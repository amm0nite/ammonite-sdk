
export class Cloud {
    constructor(token?: string);
    fetchJobs(options, next?:(err: any|null, jobs:any[]) => void);
    fetchJob(id: number, next?:(err:any|null, job) => void);
    createJob(job, next?:(err:any|null, job?) => void);
}

export class Consumer{
    constructor(token?: string);
    append(key:string, data, next?:(err:any|null, res?) => void);
    history(key:string, next?:(err:any|null, events:any[]) => void);
    load(key:string, next?:(err:any|null, value:string) => void);
    save(key:string, value:string, next?:(err:any|null, value?:string) => void);
    send(message, options, next?:(err:any|null, message?) => void);
}
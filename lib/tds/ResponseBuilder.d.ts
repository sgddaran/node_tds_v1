


export interface IBody{
    resultCount: number,
    totalCount : number,
    result: any
}

export interface IMetaData{
    statusCode : number,
    statusText : string,
    statusType : number,
    statusMessage : string,
    stackMessages : string[]
}

export interface IPayload{
    requestId : string,
    metadata : IMetaData,
    body: IBody
}

export declare class Response {
    constructor(_tagger : any) ;
    getErrorResponse(httpCode : number, httpMessage : string) : IPayload ;
}
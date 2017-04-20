import {IBody,IPayload} from "./../tds/ResponseBuilder"

export class Response{

    tagger : any;
    constructor(_tagger){
        this.tagger = _tagger;
    }

    public getErrorResponse(httpCode : number, httpMessage: string) : IPayload {
        let payLoad: IPayload = {
            requestId : "TBD",
            metadata : {
                stackMessages : undefined,
                statusCode : httpCode,
                statusMessage : httpMessage,
                statusText : "ERROR",
                statusType : 555555
            },
            body : {
                result : "",
                resultCount : 0,
                totalCount : 0

            }
        }
        return payLoad;
    }

}
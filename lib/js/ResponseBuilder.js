"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(_tagger) {
        this.tagger = _tagger;
    }
    getErrorResponse(httpCode, httpMessage) {
        let payLoad = {
            requestId: "TBD",
            metadata: {
                stackMessages: undefined,
                statusCode: httpCode,
                statusMessage: httpMessage,
                statusText: "ERROR",
                statusType: 555555
            },
            body: {
                result: "",
                resultCount: 0,
                totalCount: 0
            }
        };
        return payLoad;
    }
}
exports.Response = Response;

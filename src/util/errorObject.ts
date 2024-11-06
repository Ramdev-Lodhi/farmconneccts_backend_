import { Request } from 'express'
import { THttpError } from '../types/types'
import responseMessage from '../constant/responseMessage'
import config from '../config/config'
import { EApplicationEnvironment } from '../constant/application'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export default (err: Error | unknown, req: Request, errorStatusCode: number = 500): THttpError => {
    const errorObj: THttpError = {
        // success: false,
        status: true,
        statusCode: errorStatusCode,
        request: {
            ip: req.ip || null,
            method: req.method,
            url: req.originalUrl
        },
        message:
            err instanceof Error
                ? err.message
                : typeof err === 'string'
                  ? err || responseMessage.SOMETHING_WENT_WRONG
                  : responseMessage.SOMETHING_WENT_WRONG,
        data: null,
        trace: err instanceof Error ? { error: err.stack } : null
    }

    if (config.ENV === EApplicationEnvironment.PRODUCTION) {
        delete errorObj.request.ip
        delete errorObj.trace
    }
    return errorObj
}

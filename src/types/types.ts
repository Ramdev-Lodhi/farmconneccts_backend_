export type THttpResponse = {
    // success: boolean
    status: boolean
    // statusCode: number
    // request: {
    // ip?: string | null
    //     method: string
    //     url: string
    // }
    message: string
    data: unknown
}
export type THttpError = {
    success: boolean
    statusCode: number
    request: {
        ip?: string | null
        method: string
        url: string
    }
    message: string
    data: unknown
    trace?: object | null
}

export type user = {
    id: string
    name: string
    email: string
    mobile: string
}

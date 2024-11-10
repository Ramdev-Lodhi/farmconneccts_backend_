import express, { Application, NextFunction, Request, Response } from 'express'
import path from 'path'
import router from './router/index'
import globalErrorHandler from './middleware/globalErrorHandler'
import responseMessage from './constant/responseMessage'
import httpError from './util/httpError'
import helmet from 'helmet'
import cors from 'cors'

import bodyParser from 'body-parser'
const app: Application = express()

//middleware
app.use(helmet())
app.use(
    cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION', 'HEAD'],
        origin: ['https://client.com'],
        credentials: true
    })
)
app.use(bodyParser.json())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../', 'public')))

//Routers

app.use('/api', router)

app.use((req: Request, _: Response, next: NextFunction) => {
    try {
        throw new Error(responseMessage.NOT_FOUND('route'))
    } catch (err) {
        httpError(next, err, req, 404)
    }
})

app.use(globalErrorHandler)

export default app

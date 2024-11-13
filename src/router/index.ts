import { Router } from 'express'
import loginRoute from './authRouter'
import userRoute from './apiRouter'
import healthRoute from './healthRouter'
import adminRouter from './adminRouter'
import homeRouter from './homeRouter'
import rentRouter from './rentRouter'

const router = Router()
const defaultRoutes = [
    {
        path: '/health',
        route: healthRoute
    },
    {
        path: '/',
        route: loginRoute
    },
    {
        path: '/user',
        route: userRoute
    },
    {
        path: '/admin',
        route: adminRouter
    },
    {
        path: '/home',
        route: homeRouter
    },
    {
        path: '/rent',
        route: rentRouter
    }
]

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

export default router

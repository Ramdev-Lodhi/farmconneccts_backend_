import { Router } from 'express'
import rentController from '../controller/rentController'
import auth from '../middleware/auth'
import upload from '../middleware/multer'
const router = Router()

router.route('/rentItem').post(auth, upload('rent'), rentController.InsertRentItem)

export default router

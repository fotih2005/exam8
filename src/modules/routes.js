import { Router } from "express";
import companyRoutes from './companys/routes.js'
import bankRoutes from './bank/routes.js'
import authRotes from './auth/routes.js'
import index from '../controllers/index.controller.js'
import auth from '../controllers/auth.controller.js'
import admin from '../controllers/admin.controller.js'
import userMiddle from "../middlewares/user.midleare.js";

const routes = Router()

export default routes
    .use('/company', companyRoutes)
    .use('/bank', bankRoutes)
    .use('/login', authRotes)
    .get('/index', index)
    .get('/auth', auth)
    .get('/admin', userMiddle, admin)
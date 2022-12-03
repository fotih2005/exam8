import { Router } from "express";
import companys from './companys.js'

const companyRoutes = Router()

export default companyRoutes
    .get('/companys', companys.GET_COMPANYS)
    .get('/company/:id', companys.GET_COMPLECS)
    .get('/complecsRoom/:complecsId', companys.COMPLECS_ROOMS)
    .get('/room', companys.GET_ROOMS)
    .get('/complecs', companys.GET_COMPLECES)
    .post('/add-company', companys.ADD_COMPANY)
    .post('/add-complecs', companys.ADD_COMPLECS)
    .post('/add-room', companys.ADD_ROOM)
    .put('/update-company/:id', companys.UPDATE_COMPANY)
    .put('/update-complecs/:complecsId', companys.UPDATE_COMPLECS)
    .delete('/delete-complecs/:complecs_id', companys.DELETE_COMPLECS)
    .delete('/delete-company/:company_id', companys.DELETE_COMPANY)
import { Router } from "express";
import bank from "./bank.js";

const bankRoutes = Router()

export default bankRoutes
    .get('/banks', bank.GET_BANKS)
    .get('/get-banks', bank.BANKS)
    .put('/update-bank/:bank_id', bank.UPDATE_BANK)
    .post('/add-bank', bank.ADD_BANK)
    .delete('/delete/:bank_id', bank.DELETE_BANK)
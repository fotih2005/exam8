import { Router } from "express";
import users from "./users.js";

const authRoutes = Router()

export default authRoutes
    .get('/login', users.LOGIN)
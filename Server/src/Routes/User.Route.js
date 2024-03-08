import express from "express";

const route = express.Router();

import {signIn, signUp} from '../Controllers/User.Controllers.js'

route.post("/signup", signUp);

route.get("/signin", signIn);

export default route;
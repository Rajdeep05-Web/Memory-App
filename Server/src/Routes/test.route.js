import express from "express";
import {getData} from '../Controllers/Get.controllers.js'
const router = express.Router();

router.get('/get',getData )

export default router;
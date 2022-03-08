import express from "express";
const router = express.Router();
import wilderCtrl from '../controllers/wilderController';
import { wilderValidation } from "../validations";

router.post(
    '/create', 
    wilderValidation.create, 
    wilderCtrl.create);

export default router;
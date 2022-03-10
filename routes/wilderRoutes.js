import express from "express";
const router = express.Router();
import wilderCtrl from '../controllers/wilderController';
import { wilderValidation } from "../validations";

router.post(
    '/create', 
    wilderValidation.create, 
    wilderCtrl.create);
router.get(
    '/readAll', 
    wilderCtrl.readAll);
router.get(
    '/readOne', 
    wilderCtrl.readOne);
// router.put(
//     '/update/:id',
//     wilderCtrl.update);
router.put(
    '/update',
    wilderCtrl.update);
// router.delete(
//     '/delete/:id',
//     wilderCtrl.delete);
router.delete(
    '/delete',
    wilderCtrl.delete);

export default router;
import express from "express";
const router = express.Router();
import wilderCtrl from '../controllers/wilderController.js';
import { wilderValidation } from "../validations/index.js";

router.post(
    '/create', 
    wilderValidation.create, 
    wilderCtrl.create);
router.get(
    '/readAll', 
    wilderCtrl.readAll);
router.get(
    '/readOne/:_id', 
    wilderCtrl.readOne);
// router.put(
//     '/update/:id',
//     wilderCtrl.update);
router.put(
    '/update',
    wilderCtrl.update);
router.put(
    '/addSkills',
    wilderCtrl.addSkills);
// router.put(
//     '/updateSkills',
//     wilderCtrl.updateSkills);
// router.delete(
//     '/delete/:id',
//     wilderCtrl.delete);
router.delete(
    '/delete/:_id',
    wilderCtrl.delete);

export default router;
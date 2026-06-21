import express from "express"
import {getAllnotes, createnote, updatenote, deletenote, getNotebyId } from "../controllers/notecontrollers.js"

const router = express.Router();

export default router;

router.get("/", getAllnotes);
router.get("/:id", getNotebyId);
router.post("/", createnote);
router.put("/:id", updatenote);
router.delete("/:id", deletenote);
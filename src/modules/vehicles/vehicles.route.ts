import express from "express";
import authGuard from "../../middleware/auth";
import { vehiclesController } from "./vehicles.controller";

const router = express.Router();

router.get("/", vehiclesController.getAll);
router.get("/:vehicleId", vehiclesController.getSingle);
router.post("/", authGuard("admin"), vehiclesController.create);
router.put("/:vehicleId", authGuard("admin"), vehiclesController.update);
router.delete("/:vehicleId", authGuard("admin"), vehiclesController.deleteId);

export const vehiclesRouter = router;

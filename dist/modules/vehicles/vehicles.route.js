"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiclesRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const vehicles_controller_1 = require("./vehicles.controller");
const router = express_1.default.Router();
router.get("/", vehicles_controller_1.vehiclesController.getAll);
router.get("/:vehicleId", vehicles_controller_1.vehiclesController.getSingle);
router.post("/", (0, auth_1.default)("admin"), vehicles_controller_1.vehiclesController.create);
router.put("/:vehicleId", (0, auth_1.default)("admin"), vehicles_controller_1.vehiclesController.update);
router.delete("/:vehicleId", (0, auth_1.default)("admin"), vehicles_controller_1.vehiclesController.deleteId);
exports.vehiclesRouter = router;

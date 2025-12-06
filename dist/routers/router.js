"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const vehicles_route_1 = require("../modules/vehicles/vehicles.route");
const users__route_1 = require("../modules/users/users..route");
const bookings_route_1 = require("../modules/bookings/bookings.route");
const router = express_1.default.Router();
const apiVersion = `/api/v1`;
const moduleRouter = [
    {
        path: `${apiVersion}/auth`,
        route: auth_route_1.authRouter,
    },
    {
        path: `${apiVersion}/vehicles`,
        route: vehicles_route_1.vehiclesRouter,
    },
    {
        path: `${apiVersion}/users`,
        route: users__route_1.userRoute,
    },
    {
        path: `${apiVersion}/bookings`,
        route: bookings_route_1.bookingRoute,
    },
];
moduleRouter.forEach((route) => router.use(route.path, route.route));
router.use((req, res) => {
    res.status(404).json({
        error: "Not Found",
        message: `${req.originalUrl} - This route is not found`,
    });
});
exports.default = router;

import express, { Request, Response, Router } from "express";
import { authRouter } from "../modules/auth/auth.route";

const router: Router = express.Router();

interface IRoute {
  path: string;
  route: Router;
}
const apiVersion = `/api/v1`;

const moduleRouter: IRoute[] = [
  {
    path: `${apiVersion}/auth`,
    route: authRouter,
  },
];

moduleRouter.forEach((route) => router.use(route.path, route.route));

router.use((req: Request, res: Response) => {
  res.status(404).json({
    error: "Not Found",
    message: `${req.originalUrl} - This route is not found`,
  });
});

export default router;

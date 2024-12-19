import { RouteObject, useRoutes } from "react-router-dom";
import userRouter from "./modules";

const Router = () => {
  const routes = useRoutes(userRouter as RouteObject[]);

  return routes;
};

export default Router;

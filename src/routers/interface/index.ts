import { RouteObject } from "react-router-dom";

export declare type IRouteObject = Omit<RouteObject, "children"> & {
  children?: IRouteObject[];
};

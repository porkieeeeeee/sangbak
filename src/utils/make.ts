import { EMenuPath } from "@/enums/commonEnum";

export const makeRouteString = (path: EMenuPath) => {
  return path.startsWith("/") ? path.slice(1) : path;
};

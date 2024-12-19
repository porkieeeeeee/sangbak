import { EMenuPath } from "@/enums/commonEnum";
import { IRouteObject } from "@/routers/interface";
import lazyLoad from "@/routers/utils/lazyLoad";
import { makeRouteString } from "@/utils/make";

const userRouter: Array<IRouteObject> = [
  {
    path: makeRouteString(EMenuPath.MAIN),
    index: true,
    element: lazyLoad(() => import("@/views/pages/MainPage")),
  },
];

export default userRouter;

import { ComponentType, Suspense, lazy } from "react";

const lazyLoad = (
  componentImport: () => Promise<{
    default: ComponentType;
  }>
) => {
  try {
    const LazyComponent = lazy(componentImport);
    return (
      <Suspense fallback={<p>loading..</p>}>
        <LazyComponent />
      </Suspense>
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default lazyLoad;

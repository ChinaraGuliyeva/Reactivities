import { createRoot } from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { store, StoreContext } from "./stores/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <RouterProvider router={router}/>
  </StoreContext.Provider>
);

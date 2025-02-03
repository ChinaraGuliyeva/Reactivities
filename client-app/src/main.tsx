import { createRoot } from "react-dom/client";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import App from "./App.tsx";
import { store, StoreContext } from "./stores/store.ts";

createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router/routesConfig.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { store } from "./globalStore/store.ts";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
    <ToastContainer />
  </StrictMode>,
);

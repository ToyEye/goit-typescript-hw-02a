import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

const rootElement = document.getElementById("root") as HTMLElement | null;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}

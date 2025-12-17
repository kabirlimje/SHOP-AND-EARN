import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShopAndEarn from "./ShopAndEarn";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ShopAndEarn />
  </StrictMode>
);

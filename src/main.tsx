import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "@fontsource-variable/playwrite-at"
import "@fontsource/zilla-slab"
import "@fontsource/atkinson-hyperlegible"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Tooltip } from "./components/ui/tooltip.tsx"

import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tooltip>
      <App />
    </Tooltip>
  </StrictMode>
)

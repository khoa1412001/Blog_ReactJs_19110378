import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ConfigRoute from "./routes";

function App() {
  return (
    <Box minHeight="100vh">
      <BrowserRouter>
        <ConfigRoute />
      </BrowserRouter>
    </Box>
  );
}

export default App;

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import HomeScreen from "./screens/HomeScreen";
import theme from "./lib/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;

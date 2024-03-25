import { ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";
import theme from "./pages/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

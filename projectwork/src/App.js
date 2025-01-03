import './App.css';
import Main from "./layouts/main";
import {DeviceProvider} from "./context/devicecontext";
import {AuthProvider} from "./hooks/useAuth";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import {theme} from "./themes/Theme";
function App() {

    const user = JSON.parse(localStorage.getItem('signed-user'));

  return (
      <ThemeProvider theme={theme}>
          <DeviceProvider>
              <AuthProvider>
                  <SnackbarProvider maxSnack={3}>
                      <Router>
                        <Main/>
                      </Router>
                  </SnackbarProvider>
              </AuthProvider>
          </DeviceProvider>
      </ThemeProvider>
  );
}

export default App;

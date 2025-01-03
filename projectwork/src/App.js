import './App.css';
import Main from "./layouts/main";
import {DeviceProvider} from "./context/devicecontext";
import {AuthProvider} from "./hooks/useAuth";
import { SnackbarProvider, useSnackbar } from 'notistack';
import { BrowserRouter as Router } from "react-router-dom";

function App() {

    const user = JSON.parse(localStorage.getItem('signed-user'));

  return (
      <DeviceProvider>
          <AuthProvider>
              <SnackbarProvider maxSnack={3}>
                  <Router>
                    <Main/>
                  </Router>
              </SnackbarProvider>
          </AuthProvider>
      </DeviceProvider>
  );
}

export default App;

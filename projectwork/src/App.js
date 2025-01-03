import './App.css';
import Main from "./layouts/main";
import {DeviceProvider} from "./context/devicecontext";

function App() {
  return (
      <DeviceProvider>
        <Main/>
      </DeviceProvider>
  );
}

export default App;

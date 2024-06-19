import {
  AppModalsProvider,
  AppToastProvider,
} from "./contexts";
import Home from "./webapp/Home";

function App() {
  return (
    <>
      <AppToastProvider>
        <AppModalsProvider>
          <Home />
        </AppModalsProvider>
      </AppToastProvider>
    </>
  );
}

export default App;

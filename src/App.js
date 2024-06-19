import SmapDemo from "./demo/SmapDemo";
import {
  AppModalsProvider,
  AppToastProvider,
} from "./contexts";

function App() {
  return (
    <>
      <AppToastProvider>
        <AppModalsProvider>
          <SmapDemo />
        </AppModalsProvider>
      </AppToastProvider>
    </>
  );
}

export default App;

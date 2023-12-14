import { IonApp, setupIonicReact } from "@ionic/react";

import User from "./pages/User";

import "@ionic/react/css/core.css";

setupIonicReact();

function App(): React.ReactElement {
  return (
    <IonApp>
      <User />
    </IonApp>
  );
}

export default App;

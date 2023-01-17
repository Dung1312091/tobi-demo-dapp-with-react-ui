import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemoApi} from "./TonProofDemoApi";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";

function App() {

  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          walletsListSource="https://raw.githubusercontent.com/ton-connect/wallets-list/feature/openmask/wallets.json"
          getConnectParameters={() => TonProofDemoApi.connectWalletRequest}
      >
        <div className="app">
            <Header />
            <TxForm />
            <TonProofDemo />
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App

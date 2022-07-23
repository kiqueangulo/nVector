import GlobalProvider from "./context/GlobalProvider.js";

import Header from "./components/Header.js";
import ScrollBar from "./components/ScrollBar/ScrollBar.js";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="header">
          <Header />
          <ScrollBar />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;

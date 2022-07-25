import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocationContext } from "./context/LocationContext.js";
import { SidebarData } from "./components/Navbar/SidebarData.js";

import Header from "./components/Header.js";
import ScrollBar from "./components/ScrollBar/ScrollBar.js";
import SectionBox from "./components/SectionBox.js";

import "./App.css";

function App() {
  const { allLocations } = useLocationContext();
  const [sectionKeys, sectionsObj] = allLocations;

  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
          <ScrollBar />
        </div>
        <Routes>
          {SidebarData.map((route, index) => (
            <Route key={index} path={route.path} />
          ))}
          {sectionKeys?.map((section, index) => (
            <Route
              key={index}
              path={`${section}`}
              element={<SectionBox subSections={sectionsObj[section]} />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

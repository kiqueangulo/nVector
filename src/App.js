import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocationContext from "./context/LocationContext.js";

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
          <Route path="/user" />
          <Route exact path="/" />
          <Route path="/new" />
          <Route path="/locations" />
          <Route path="/synch" />
          <Route path="/support" />
          <Route path="/log" />
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

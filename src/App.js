import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocationContext } from "./context/LocationContext.js";
import { SidebarData } from "./components/Navbar/SidebarData.js";

import Header from "./components/Header.js";
import ScrollBar from "./components/ScrollBar/ScrollBar.js";
import SectionBox from "./components/SectionBox.js";
import FoundProducts from "./components/Details/FoundProducts.js";
import ProductDetails from "./components/Details/ProductDetails.js";

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
          {SidebarData?.map((route, index) => (
            <Route
              key={index}
              excat
              path={route.path}
              element={route.component ?? route.component}
            />
          ))}
          {sectionKeys?.map((section, index) => (
            <Route
              key={index}
              path={`/${section}`}
              element={<SectionBox subSections={sectionsObj[section]} />}
            />
          ))}
          <Route
            exact
            path="/search/products/results"
            element={<FoundProducts />}
          />
          <Route
            path="/search/products/results/:product_id"
            element={<ProductDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

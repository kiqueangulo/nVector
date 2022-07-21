import { GlobalProvider } from './components/context/GlobalState.js';

import Header from './components/Header.js';
import ScrollBar from './components/ScrollBar/ScrollBar.js';
import SectionBox from './components/SectionBox';

import './App.css';

function App() {
  let sectionsTestObject={
    subSections:['Sub-section A','Sub-section B','Sub-section C','Sub-section D','Sub-section E']
  }
  let subSectionArray = sectionsTestObject.subSections
  // console.log(subSectionArray)
  return (
    <GlobalProvider>
      <div className="App">
        <div  className ="header">
          <Header/>
          <ScrollBar />
        </div>
        <SectionBox subSections={subSectionArray}/>
      </div>
    </GlobalProvider>
  );
};

export default App;

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
    <div className="App">
      <Header/>
      <ScrollBar />
      <SectionBox subSections={subSectionArray}/>
    </div>
  );
};

export default App;

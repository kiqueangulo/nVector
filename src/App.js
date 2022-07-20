import Header from './components/Header.js';
import ScrollBar from './components/ScrollBar/ScrollBar.js';
import SectionBox from './components/SectionBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollBar />
      <SectionBox/>
    </div>
  );
};

export default App;

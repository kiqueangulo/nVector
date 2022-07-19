import Header from './components/Header.js';
import ScrollBar from './components/ScrollBar/ScrollBar.js';
import ItemBox from './components/ItemBox';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScrollBar />
      <ItemBox/>
    </div>
  );
};

export default App;

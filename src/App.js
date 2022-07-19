import Navbar from './components/NavBar';
import ItemBox from './components/ItemBox';
import ScrollBar from './components/ScrollBar/ScrollBar.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollBar />
      <ItemBox/>
      
    </div>
  );
}

export default App;

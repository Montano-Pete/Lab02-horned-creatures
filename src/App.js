import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList data={images} />
    </div>
  );
}

export default App;

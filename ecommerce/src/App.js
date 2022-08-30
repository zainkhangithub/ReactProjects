import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;

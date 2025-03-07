import './App.css';
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop/Shop';
import SelectedProduct from './pages/SelectedProduct/SelectedProduct';
import Cart from './Features/Cart/Cart';
import Checkout from './Features/Checkout/Checkout';
import ThankYou from './pages/ThankYou/ThankYou';

function App() {
     return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop'element={<Shop />} />
        <Route path='/selectedproduct/:id' element={<SelectedProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      </BrowserRouter>
     );  
}

export default App;

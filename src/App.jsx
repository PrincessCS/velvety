import './App.css';
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Shop from './pages/Shop/Shop';
import SelectedProduct from './pages/SelectedProduct/SelectedProduct';

function App() {
     return(
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/shop'element={<Shop />} />
        <Route path='/selectedproduct/:id' element={<SelectedProduct />} />
      </Routes>
      </BrowserRouter>
     );  
}

export default App;

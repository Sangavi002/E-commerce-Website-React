import {Routes,Route} from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import ProductDetail from './Pages/ProductDetail';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<PrivateRoute><Product/></PrivateRoute>} />
      <Route path='/cart' element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path='/checkout' element={<PrivateRoute><Checkout/></PrivateRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/product/:userId' element={<ProductDetail/>} />
    </Routes>
    </>
  )
}

export default App

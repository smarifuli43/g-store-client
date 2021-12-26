import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import MyOrders from './Pages/Dashboard/User/MyOrders/MyOrders';
import ManageOrders from './Pages/Dashboard/Admin/ManageOrders/ManageOrders';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='shop' element={<Shop/>} />
            <Route path='login' element={<Login />} />
            <Route path='cart' element={<Cart />} />
            <Route path='register' element={<Register />} />

            <Route path='products/:id' element={<ProductDetails />} />
            <Route
              path='product/checkout'
              element={
                <PrivateRoute>
                 <Checkout/>
                </PrivateRoute>
              }
            >
            
            </Route>
            <Route
              path='dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path={'/dashboard'} element={<DashboardHome />}></Route>
              <Route path='makeadmin' element={<MakeAdmin />}></Route>
              <Route path='addproduct' element={<AddProduct />}></Route>
              <Route path='manageorders' element={<ManageOrders/>}></Route>
              <Route path='myorders' element={<MyOrders/>}></Route>
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

import './App.css';
import Home from './Screens/Home';
import Login from './Screens/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './Screens/Signup';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './Screens/MyOrder';

function App() {
  return (
    <CartProvider>

    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/createuser' element={<Signup/>}></Route>
          <Route exact path='/myOrder' element={<MyOrder/>}></Route>
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from './component/navbar.jsx';
import Navbar from './component/navbar.jsx';
import Reg from './component/register.jsx';
import Login from './component/login.jsx';
import Error from './component/error.jsx';
import Home from './component/home.jsx';
function App() {
  return (
    <>
  <Navbar />
  <BrowserRouter>
  <Routes>
<Route path="/register" element={<Reg/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="*" element={<Error/>}></Route>
<Route path="/home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;

import './App.css';

import Login from './component/login';
import Registration from './component/Registration';

import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import SetPassword from './component/SetPassword';
import DashBoard from './component/DashBoard';
import MenuBar from './component/MenuBar';
import Product from './component/Product';

const router=createBrowserRouter([
  {path:'/',element:<Login/>},
  {path:'/SignUp',element:<Registration/>}, 
  {path:'/Setpassword',element:<SetPassword/>},
  {path:'/Dashboard',element:<DashBoard/>},
  {path:'/MenuBar',element:<MenuBar/>},
  {path:'/Product',element:<Product/>}

]);
function App() {
  return <RouterProvider router={router}/>
  // return(
  //   <div className="App">
  //         <Registration/>
  //   </div>
  // )
  };

export default App;

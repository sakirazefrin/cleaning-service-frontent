import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Admin from './components/Dashboard/Admin/Admin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Cart from './components/Cart/Cart';
import LogOut from './components/LogOut/LogOut';
import Orders from './components/Orders/Orders';
import AddBlog from './components/Dashboard/AddBlog/AddBlog';
import AddService from './components/Dashboard/AddService/AddService';
import OrderStatus from './components/Dashboard/OrderStatus/OrderStatus';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import CheckOut from './components/CheckOut/CheckOut';
import BlogPage from './components/BlogPage/BlogPage';
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: "",
    email: "",
    img: ""
  })

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            </Route>
            
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/review">
            <About></About>
          </PrivateRoute>
         
          <PrivateRoute path="/cart/:id">
            <Cart></Cart>
          </PrivateRoute>

        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>

        <Route path="/blog">
          <BlogPage></BlogPage>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

          <Route path="/logOut">
            <LogOut></LogOut>
          </Route>

          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>

        <PrivateRoute exact path="/admin">
          <Admin></Admin>
        </PrivateRoute>

        <Route path="/admin/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>

          <Route path="/admin/addBlog">
            <AddBlog></AddBlog>
          </Route>

          <Route path="/admin/addService">
            <AddService></AddService>
          </Route>

          <Route path="/checkOut/:id">
            <CheckOut></CheckOut>
          </Route>

          <Route path="/admin/orderMaintain">
            <OrderStatus></OrderStatus>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;

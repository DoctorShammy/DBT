import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import HomePage from './components/HomePage/HomePage.jsx'
// import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// const loggedIn = false;
// const router = createBrowserRouter(
//   [ 
//     {
//       path: "/",
//       // element:<App/>
//       element: loggedIn ? ( <HomePage />) : (<Login onLogin={handleLogin} />)
//     }

//   ]
// );

// ReactDOM.createRoot(document.getElementById('root')).render(

//   <RouterProvider router={router}/>

// )
const loggedIn = false;

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={loggedIn ? HomePage : Login} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);
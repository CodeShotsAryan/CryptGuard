import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home'
import Loading from './components/Loading'
<<<<<<< HEAD
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Dashboard from './components/Dashboard'
=======
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard/Dashboard.jsx'
>>>>>>> 5f1b1b9e926b76a1c30491d195161a2312d0147d
import FileMangementInterface from './components/FileMangementInterface'
import AccountSettingInterface from './components/AccountSettingInterface'
import FileDetails from './components/FileDetails'
import Error from './components/Error'
import Navbar from './components/Navbar'
<<<<<<< HEAD
import About from './components/About.jsx'
=======
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'
>>>>>>> 5f1b1b9e926b76a1c30491d195161a2312d0147d
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='filemanagementinterface' element={<FileMangementInterface/>}/>
      <Route path='accountsettinginterface' element={<AccountSettingInterface/>}/>
      <Route path='filedetails' element={<FileDetails/>}/>
      <Route path='error' element={<Error/>}/>
      <Route path='loading' element={<Loading/>}/>
      <Route path='about' element={<About/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Theme>
    <RouterProvider router={router}/>
  </Theme>
  </React.StrictMode>,
)

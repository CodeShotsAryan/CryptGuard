import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home'
import Loading from './components/Loading'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import FileMangementInterface from './components/FileMangementInterface'
import AccountSettingInterface from './components/AccountSettingInterface'
import FileDetails from './components/FileDetails'
import Error from './components/Error'
import Navbar from './components/Navbar'
import About from './components/About.jsx'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes'
import { Provider } from 'react-redux'
import store from './app/store.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='filemanagementinterface' element={<FileMangementInterface/>}/>
      <Route path='accountsettinginterface' element={<AccountSettingInterface/>}/>
      <Route path='dashboard/filedetails' element={<FileDetails/>}/>
      <Route path='error' element={<Error/>}/>
      <Route path='loading' element={<Loading/>}/>
      <Route path='about' element={<About/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <Theme>
        <RouterProvider router={router}/>
      </Theme> 
    </Provider>
  </React.StrictMode>
)

import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubFolder } from './components/Github/Github'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children:[
  //       {
  //         path:'',
  //         element:<Home />
  //       },
  //       {
  //         path: 'about',
  //         element:<About />
  //       },
  //       {
  //         path: 'contact',
  //         element:<Contact />
  //       },
  //       {
  //         path: 'github',
  //         element:<Github />
  //       }
  //     ]
  //   }
  // ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route
          loader={githubFolder}
          path='github'
          element={<Github />}
        />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

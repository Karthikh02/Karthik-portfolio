import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import AboutPage from './components/AboutPage'
import SkillsPage from './components/SkillsPage'
import ProjectPage from './components/ProjectPage'
import ProjectPage2 from './components/ProjectPage2'
import ContactPage from './components/ContactPage'
import BackButton from './components/BackButton'
import Adminpanel from './components/Adminpanel'
import AdminLogin from './components/AdminLogin'
import { createContext } from 'react'


export const MyContext=createContext()
function App() {
  return (
    <>
    <BrowserRouter>
    <MyContext.Provider value={<BackButton/>}>
      <Navbar/>

      {/* <BackButton/> */}
      <Routes>
          <Route element={<HomePage/>} path='/'/>
          <Route element={<AboutPage/>} path='/about'/>
          <Route element={<SkillsPage/>} path='/skills'/>
          <Route element={<ProjectPage/>} path='/projects'/>
          <Route element={<ProjectPage2/>} path='/allProjects'/>
          {/* <Route element={<Adminpanel/>} path='/Adminpanel'/> */}
          {/* <Route element={<AdminLogin/>} path='/AdminLogin'/> */}
          <Route element={<ContactPage/>} path='/ContactP'/>
      </Routes>
      </MyContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App

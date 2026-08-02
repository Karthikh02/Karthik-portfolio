import React, { useState } from 'react'
import {  NavLink, useNavigate, } from 'react-router-dom'
import '../assets/styles/mystyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BackButton from './BackButton';


const Navbar = () => {
    
    let [menu,setMenu]=useState(false)

    let handleMenu=()=>{
        setMenu(!menu)
    }

    let closemenu=()=>{
        setMenu(false)
    }
     const navigate = useNavigate();
    let handlelog=()=>{
        navigate("/")
      }
  return (
    <>
        <div className="nav-bar">
            <nav>
                    <div className="log" >
                    <h1 onClick={handlelog}>Karthik</h1>
                </div>

                <div className="menulinks">
                    <div className="menu" onClick={handleMenu}>
                        <button>{menu ?<CloseIcon/>:<MenuIcon/>}</button>
                    </div>
                    <div className={menu ? "show-links" : "links"}>
                            <ul>
                                <li><NavLink to={'./'} onClick={closemenu}>Home</NavLink></li>
                                <li><NavLink to={'./about'} onClick={closemenu}>About</NavLink></li>
                                <li><NavLink to={'./skills'} onClick={closemenu}>Skills</NavLink></li>
                                <li><NavLink to={'./allProjects'} onClick={closemenu}>Projects</NavLink></li>
                                <li><NavLink to={'./ContactP'} onClick={closemenu}>Contact</NavLink></li>
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
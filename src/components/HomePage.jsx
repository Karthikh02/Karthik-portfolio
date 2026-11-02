import React from 'react'
import AboutPage from './AboutPage'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import Adminpanel from './Adminpanel'

const HomePage = () => {
  
  let resume_view=()=>{
    window.open("/Resume/Karthik_Resume_1.pdf")
  }

  return (
    <div>
       <div className='homepage'>
            <div className="left">
              <p>Hi,I'm</p>
              <div className="name" >KARTHIK H</div>
              <div className="role">Python Full Stack Developer | Data Analyst
                {/* and I'm a [Python Full Stack Developer]
                                  [Data Analyst]
                                  [React Developer] */}
              </div>
              <div className="short_info">
                I am a passionate fresher in <span>
                  Python Full Stack Development</span> and <span>Data Analytics,</span> dedicated to building modern, responsive web applications and creating meaningful data insights. Skilled in Python, Django, React, SQL, 
                Power BI, HTML, CSS, and JavaScript,I am always eager to learn, grow, and contribute to innovative projects.
              </div>
              <div className="link">
               <a
                  href="https://www.linkedin.com/in/Karthikh28"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./images/Linkedin_logo2.png" alt="LinkedIn" />
                </a>
                <a
                  href="https://github.com/karthikh02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/images/github_logo2.png" alt="GitHub log" />
                </a>
                
              </div>
              <div className="resume">
                <button onClick={resume_view}> My Resume</button>
              </div>
            </div>
            <div className="right">
              <div className="img">
                 {/* <img src="./images/img.jpeg" alt="NO IMAGE" /> */}
                  <img src="./images/Profile_photo.jpeg" alt="NO IMAGE" />
              </div>
            </div>
        </div>
        <div className="aboutpage">
          <AboutPage/>
        </div>
        <div className="skillsPage">
          <SkillsPage/>
        </div>
        <div className="projectpage">
          <ProjectPage/>
        </div>
        <div className="ContactPage">
          <ContactPage/>
        </div>
        <div className="footer">
          <p>© 2026 | Code • Analyze • Innovate | Designed & Developed by <span>Karthik H</span></p>
        </div>
    </div>
  )
}

export default HomePage
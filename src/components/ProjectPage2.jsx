import { useContext } from "react"
import { MyContext } from "../App"
import { useNavigate } from "react-router-dom"

const ProjectPage2=()=>{
    const data=useContext(MyContext)
    let navigate=useNavigate()
    return(
        <div className="Project_content">
            <h1>Projects <hr /></h1>
            {/* <div className="back"><h3 onClick={()=>{navigate("/")}}>Back</h3></div> */}
            <h3>{data}</h3>
            <div className="projects">
                <div className="box">
                    {/* 1 */}
                    <div className="img">
                        <img src="./images/Projects-img/Calculater_project.jpg" alt="NO IMG" />
                    </div>
                    <div className="title">Calculator (JavaScript)</div>
                    <div className="desc">  Developed a responsive calculator application to perform basic arithmetic
                            operations with a simple and user-friendly interface.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> HTML, CSS, JavaScript
                    </div>
                    <div className="btn">
                         <button onClick={()=>{window.open("https://github.com/Karthikh02/simple-calculator-js","_self")}}>Github Link</button>
                         <button onClick={()=>{window.open("https://calculatorapp-simp.netlify.app/","_self")}}>Live Link</button>
                    </div>
                </div>
                {/* 1.2 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/Otp.png" alt="NO IMG" />
                    </div>
                    <div className="title">OTP Generator (JavaScript)</div>
                    <div className="desc">  Developed a simple OTP generator application that creates random 
                                one-time passwords using JavaScript with a clean and responsive interface.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> HTML, CSS, JavaScript
                    </div>
                    <div className="btn">
                        <button onClick={()=>{window.open("https://github.com/Karthikh02/OTP-Generator-js","_self")}}>Github Link</button>
                         <button onClick={()=>{window.open("https://otp-generatorapp.netlify.app/","_self")}}>Live Link</button>
                    </div>
                </div>

                {/* 2 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/Digital_clock.jpg" alt="NO IMG" />
                    </div>
                    <div className="title">Digital Clock (JavaScript)</div>
                    <div className="desc"> Built a real-time digital clock that displays the current time with
                                 automatic updates using JavaScript.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> HTML, CSS, JavaScript
                    </div>
                    <div className="btn">
                        {/* <button onClick={()=>{window.open("","_self")}}>Github Link</button> */}
                         <button onClick={()=>{window.open("https://digital-clock-simple-js.netlify.app/","_self")}}>Live Link</button>
                    </div>
                </div>
                {/* 3 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/To_do.jpg" alt="NO IMG" />
                    </div>
                    <div className="title">To-Do Management System (Django)</div>
                    <div className="desc">  Developed a task management application to create, update, complete,
                          and delete daily tasks efficiently.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> Python, Django, SQLite, HTML, CSS
                    </div>
                    <div className="btn">
                        <button onClick={()=>{window.open("https://github.com/Karthikh02/Todo-Management-System","_self")}}>Github Link</button>
                         {/* <button>Live Link</button> */}
                    </div>
                </div>
                {/* 4 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/Flight_project.jpg" alt="NO IMG" />
                    </div>
                    <div className="title">Flight Ticket Booking System (Django)</div>
                    <div className="desc"> Developed a web-based flight booking application with user management,
                        flight details, and booking functionality.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> Python, Django, SQLite, HTML, CSS, JavaScript
                    </div>
                    <div className="btn" onClick={()=>{window.open("https://github.com/Karthikh02/Flight-Ticket-Booking-System","_self")}}>
                        <button>Github Link</button>
                         {/* <button>Live Link</button> */}
                    </div>
                </div>
                {/* 5 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/ipl_data.png" alt="NO IMG" />
                    </div>
                    <div className="title">IPL Performance Analytics (Python)</div>
                    <div className="desc">  Analyzed IPL datasets to extract insights about teams, players, and match
                        performance using data analysis and visualization techniques.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> Python, NumPy, Pandas, Matplotlib, Seaborn
                    </div>
                   <div className="btn" onClick={() => {window.open("https://github.com/Karthikh02/IPL-Performance-Analytics-using-Python","_self");}}>
                        <button>Github Link</button>
                         {/* <button>Live Link</button> */}
                    </div>
                </div>
                {/* 6 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/ShopQuic_project.png" alt="NO IMG" />
                    </div>
                    <div className="title">ShopQuick - E-commerce Website (React)</div>
                    <div className="desc">  Developed a responsive e-commerce website with product listings,
                           category filtering, and a modern user interface.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> React.js, JavaScript, CSS, Material UI
                    </div>
                   <div className="btn" onClick={()=>{window.open("https://github.com/Karthikh02/ShopQuick","_self")}}>
                         <button>Github Link</button>
                         {/* <button>Live Link</button> */}
                    </div>
                </div>
                {/* 7 */}
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/Library_management.png" alt="NO IMG" />
                    </div>
                    <div className="title">Library Management System (Django)</div>
                    <div className="desc">  Developed a library management system with user authentication, book management,
                                  member management, borrowing records, CRUD operations, and REST APIs using
                                Django REST Framework (DRF).
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> Python, Django, Django REST Framework (DRF), SQLite, HTML, CSS
                    </div>
                    {/* <div className="btn">
                        <button>Github Link</button>
                         <button>Live Link</button>
                    </div> */}
                </div>
                {/* 8 */}
                 <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/Shopsphere.jpg" alt="NO IMG" />
                    </div>
                    <div className="title">ShopSphere - E-commerce Website (Django)</div>
                    <div className="desc"> Developed a full-stack e-commerce application with user authentication,
                                product management, shopping cart, and order management features.
                    </div>
                    <div className="tech">
                         <span>Technologies:</span> Python, Django, SQLite, HTML, CSS, JavaScript
                    </div>
                    {/* <div className="btn">
                         <button>Github Link</button>
                         <button>Live Link</button>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default ProjectPage2
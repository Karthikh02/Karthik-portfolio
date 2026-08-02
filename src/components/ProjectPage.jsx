import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const ProjectPage=()=>{
    let navigate=useNavigate()
    return(
        <div className="Project_content">
            <h1>Projects <hr /></h1>
            <div className="projects">
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
                    <div className="btn">
                         <button  onClick={()=>{window.open("https://github.com/Karthikh02/Flight-Ticket-Booking-System","_self")}}>Github Link</button>
                         {/* <button> Live Link</button> */}
                    </div>
                </div>
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
                    <div className="btn" >
                        <button onClick={() => {window.open("https://github.com/Karthikh02/IPL-Performance-Analytics-using-Python","_self");}}> Github Link</button>
                        {/* <Button>Live Link</Button> */}
                    </div>
                </div>
                <div className="box">
                    <div className="img">
                        <img src="./images/Projects-img/ShopQuic_project.png" alt="NO IMG" />
                    </div>
                    <div className="title">ShopQuick – E-Commerce Website (React)</div>
                    <div className="desc">Developed a responsive React-based e-commerce website with 
                        product browsing, search, and shopping cart functionality.
                    </div>
                    <div className="tech">
                        <span>Technologies:</span> React.js, JavaScript, HTML5, CSS3, React Router
                    </div>
                    <div className="btn" >
                        <button onClick={()=>{window.open("https://github.com/Karthikh02/ShopQuick","_self")}}>Github Link</button>
                         {/* <button>Live Link</button> */}
                    </div>
                </div>
            </div>
            <div className="more-btn">
                <button onClick={()=>{navigate('/allprojects')}}><ExpandMoreIcon/>Show More</button>
            </div>
        </div>
    )
}

export default ProjectPage
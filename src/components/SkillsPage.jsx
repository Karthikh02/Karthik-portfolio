import { useContext } from "react"
import { MyContext } from "../App"

const SkillsPage=()=>{
    const data=useContext(MyContext)
    return(
        <div className="skills">
            <h1>Skills <hr /></h1>
            <h3>{data}</h3>
            <div className="skills-content">
                <div className="box">
                    <div className="title">Frontend Technologies</div>
                    <div className="icons">
                        <img src="./images/Html_log.png" alt="" />
                        <img src="./images/Css_log.png" alt="" />
                        <img src="./images/javascript_logo.jpg" alt="" />
                        <img src="./images/React_logo.png" alt="" />
                    </div>
                    <div className="name">
                         HTML5, CSS3, JavaScript, React.js, Material UI
                    </div>
                </div>
                <div className="box">
                    <div className="title">Backend Technologies</div>
                    <div className="icons">
                        <img src="./images/Python_log.png" alt="" />
                        <img src="./images/Django_log.jpg" alt="" />
                    </div>
                    <div className="name">
                         Python, Django
                    </div>
                </div>
                <div className="box">
                    <div className="title">Database Technologies</div>
                    <div className="icons">
                        <img src="./images/SQL_log.jpg" alt="" />
                        <img src="./images/SQLite_log.jpg" alt="" />
                    </div>
                    <div className="name">
                         SQL , SQLite
                    </div>
                </div>
                <div className="box">
                    <div className="title">Data Analytics Tools</div>
                    <div className="icons">
                        <img src="./images/Numpy_log.png" alt="" />
                        <img src="./images/pandas_log.png" alt="" />
                        <img src="./images/Matplotlib2.png" alt="" />
                        <img src="./images/Seaborn_log.png" alt="" />
                        <img src="./images/PowerBI_log.png" alt="" />
                        <img src="./images/Excel_log.jpg" alt="" />
                    </div>
                    <div className="name">
                        NumPy, Pandas, Matplotlib, Seaborn, Power BI, Excel
                    </div>
                </div>
                 <div className="box">
                    <div className="title">Tools</div>
                    <div className="icons">
                        <img src="./images/github_logo.png" alt="" />
                        <img src="./images/git_log.png" alt="" />
                        <img src="./images/vscode_log.png" alt="" />
                        <img src="./images/Jupter_log.jpg" alt="" />
                        <img src="./images/Gogle_colab.jpg" alt="" />                    </div>
                    <div className="name">
                       GitHub, Git, VS Code, Jupyter Notebook, Google Colab
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage
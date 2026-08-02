
import DownloadIcon from '@mui/icons-material/Download';
import { useContext } from "react"
import { MyContext } from "../App"


const AboutPage=()=>{
    const data=useContext(MyContext)
    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Resume/Karthik_Resume.pdf";
        link.download = "Karthik_H_Resume.pdf";
        link.click();
    }
    return(
        <>
            <div className="about-content">
                <div className="title">ABOUT <hr /></div>
                <h3>{data}</h3>
                <div className="content">
                    <p>
                        Hello! I'm <span>Karthik H</span>, a <span>Bachelor of Computer Applications (BCA)</span> graduate with a strong 
                        interest in software development and data analytics. I enjoy building practical, user-friendly applications and 
                        solving real-world problems through technology. 
                    </p>

                    <p>
                       My technical skills include <span>Python, Django, SQL, HTML, CSS, JavaScript, React, Power BI, Excel, NumPy, Pandas, Matplotlib, and Seaborn.</span> 
                       I have hands-on experience in developing web applications, working with databases, performing data analysis, and creating interactive dashboards and 
                       data visualizations. I am passionate about learning new technologies, improving my problem-solving abilities, and continuously enhancing 
                       my technical skills through practical experience.
                    </p>
                    <p>
                       I am currently seeking opportunities as a <span>Python Developer, Full Stack Developer, Data Analyst, SQL Developer, or Power BI Developer,</span> 
                       where I can grow professionally while making a meaningful contribution to the organization.
                    </p>
                </div>
                <div className="resume" onClick={downloadResume}>
                    <div className=""><DownloadIcon/> </div>
                    <div className="">My Resume</div>
                </div>
                    <div className="extra">
                        <div className="education">
                        <div className="bca">
                            <div className="etitle">Education</div>
                            <div className="deg">
                            Bachelor of Computer Applications (BCA)</div>
                            <div className="uni">vijayanagara sri krishnadevaraya university,</div>
                            <div className="loc">Bellary.</div>
                            <div className="loc">Aug 2022 - June 2025 </div>
                        </div>
                        <div className="puc">
                            <div className="deg">Pre-University Course (PUC)</div>
                            <div className="uni">SES Vidyamandira PU College,</div>
                            <div className="loc">Sandur, Karnataka</div>
                            <div className="loc">Jul 2020 - Apr 2022 </div>
                        </div>
                    </div>
                    <div className="Certficat">
                        <div className="py">
                            <div className="Ctitle">Training & Certifications</div>
                            <div className="nam">Python Full Stack Development</div>
                            <div className="loc">PySpiders</div>
                        </div>
                        <div className="da">
                            <div className="nam">Data Analytics with Python</div>
                            <div className="loc">PySpiders</div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default AboutPage
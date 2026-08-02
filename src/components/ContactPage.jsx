import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MyContext } from "../App";

const ContactPage=()=>{
    const data=useContext(MyContext)
    const form=useRef()
    const sendemail =(e)=>{
        e.preventDefault()
        emailjs.sendForm(
            "service_k54xwn7",
            "template_krodkpk",
            form.current,
            "2cK3ud5VhX0C84UHG"
        )
        .then(()=>{
            alert("Message Sent Successfully!")
            form.current.reset();
        })
        .catch((error)=>{
            console.log(error)
            alert("Failed To send Message")
        })
    }
    return(
        <div className="contact_contant">
            <h1>CONTACT <hr /></h1>
            <h3>{data}</h3>
            <div className="box">
                <div className="left">
                    <div className="email">
                        <span><EmailIcon/></span>karthikhk750@gmail.com
                    </div>
                    <div className="phno">
                        <span><LocalPhoneIcon/></span>+91 9880117382
                    </div>
                    <div className="loc">
                        <span><LocationOnIcon/></span>Bangalore,Karnataka
                    </div>
                     <div className="link">
                        <img src="./images/Linkedin_logo2.png" alt="" />
                        <img src="/images/github_logo2.png" alt="GitHub log" />
                    </div>
                        </div>
                <div className="right">
                    <div className="form">
                        <form ref={form} onSubmit={sendemail}>
                            <label htmlFor="">Name :</label>
                            <input type="text" name="name" placeholder='Enter your Name' />

                            <label htmlFor="">Phone No:</label>
                            <input type="tel" name="phone" placeholder='Enter your Phone number'/>

                            <label htmlFor="">Email :</label>
                            <input type="email" name="email" placeholder='Enter your Email'/>

                            <label htmlFor="">Message :</label>
                            <textarea name="message" rows={5} placeholder='Enter Your Message '></textarea>

                            <button type='Submit'>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactPage
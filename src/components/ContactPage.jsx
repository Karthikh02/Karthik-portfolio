import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MyContext } from "../App";

const ContactPage=()=>{
    const data=useContext(MyContext)
    const form=useRef()
    
    const sendemail = async (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);

        const contactData = {
            name: formData.get("name"),
            phone_no: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            // Step 1: Send data to Django
            const response = await fetch(
                "http://127.0.0.1:8000/api/contact_message/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(contactData),
                }
            );

        const result = await response.json();

        if (!response.ok) {
            console.log(result);
            alert("Please check your form details.");
            return;
        }

        // Step 2: Send email using EmailJS
        try {
            await emailjs.sendForm(
                "service_k54xwn7",
                "template_krodkpk",
                form.current,
                "2cK3ud5VhX0C84UHG"
            );

            alert("Message Saved and Email Sent Successfully!");
        } catch (emailError) {
            console.log(emailError);
            alert("Message saved in database, but email notification failed.");
        }

        form.current.reset();

    } catch (error) {
        console.log(error);
        alert("Unable to connect to Django server.");
    }
};

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
                        </div>
                <div className="right">
                    <div className="form">
                        <form ref={form} onSubmit={sendemail}>
                            <label htmlFor="">Name :</label>
                            <input type="text" name="name" placeholder='Enter your Name'  required/>

                            <label htmlFor="">Phone No:</label>
                            <input type="tel" name="phone" placeholder='Enter your Phone number' pattern="[0-9]{10}" title="Please enter a value 10-digit phone number" required/>

                            <label htmlFor="">Email :</label>
                            <input type="email" name="email" placeholder='Enter your Email' required/>

                            <label htmlFor="">Message :</label>
                            <textarea name="message" rows={5} placeholder='Enter Your Message' required></textarea>

                            <button type='Submit'>Send Message</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactPage
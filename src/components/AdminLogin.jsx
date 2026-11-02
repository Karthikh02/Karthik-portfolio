import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const Login = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setMessage("Please enter username and password");
            return;
        }

        try {

            const response = await fetch(
                "http://127.0.0.1:8000/api/admin_login/",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                }
            );

            const result = await response.json();

            if (response.ok) {

                setMessage("Login Successful!");

                navigate("/Adminpanel");

            } else {

                setMessage(result.message);

            }

        } catch (error) {

            console.log(error);

            setMessage("Unable to connect to Django server");

        }
    };

    return (
        <div className="AdminLogin">

            <h1>Login</h1>

            <div className="form">

                <form onSubmit={Login}>

                    <label>Username:</label>

                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Username"
                        required
                    />

                    <label>Password:</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        required
                    />

                    <button type="submit">Login</button>

                    <p>{message}</p>

                </form>

            </div>

        </div>
    );
};

export default AdminLogin;
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
/* import About from "./components/About.js"; */
import React, { useState } from "react";
import Alert from "./components/Alert.js";
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */
/* Router, Routes, Route, Link are 4 main things we use from react-router-dom */
/* github pages hosting don't work well with Router, so for now we will disable router */

function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");

            document.body.style.backgroundColor = "#2f3030";
            document.title = "TextUtils - Dark Mode";
            showAlert("dark mode is enabled", "dark");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            document.title = "TextUtils - Light Mode";

            showAlert("light mode is enabled", "success");
        }
    };
    return (
        <>
            <Navbar
                website_name="TextUtils"
                blog="Memapur"
                blog_url="https://memapur.com/"
                mode={mode}
                toggleMode={toggleMode}
            />
            <Alert alert={alert}></Alert>
            {/* <Alert alert="Ye Sasta Vlog Bhi Dekh Lena" alertLink="https://memapur.com/" blogName="Memapur"></Alert> */}
            <div className="container">
                <TextForm
                    heading="Enter your text to analyse"
                    mode={mode}
                    showAlert={showAlert}
                />
                {/* <About mode={mode} /> */}
            </div>
        </>
    );
}

export default App;

import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Sample text");

    // uppercase button
    const handleUpClick = () => {
        /*  console.log("Upper Case was clicked"); */
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    };
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");

    };
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Textarea Clearerd", "success");

    }
    const handleCopyClick = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");

    
    }
    const handleTrimClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");

    }
    
    const handleCapClick = ()=>{
        let temp = text.split(" ");

        for (let i=0; i<temp.length; i++){
            temp[i] = temp[i][0].toUpperCase() + temp[i].substring(1);
        }

        setText(temp.join(" "));
        props.showAlert("Text Capitalized", "success");


    }

    const handleOnChange = (event) => {
        /*    console.log("On change"); */
        setText(event.target.value);
    };
    return (
        <>
            <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
                <h1>{props.heading}</h1>
                <div className="form-group" >
                    <textarea 
                    style={{backgroundColor:props.mode==="light"?"#F5EBEB":"#D5B4B4"}}
                    className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} // for typing
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick}>lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleCapClick}>Capitalize</button>
                <button className="btn btn-danger mx-1 my-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-success mx-1 my-2" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-2" onClick={handleTrimClick}>Remove Extra Spaces</button>
              
            </div>
            <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Your Text Summary</h2>
                <ul>
                    <li>
                        <p>
                            Your text contains{" "}
                            <b>{text.split(" ").length} Words </b> and{" "}<b>{text.length} Characters</b>{" "}

                        </p>
                    </li>
                    <li>
                        <p><b>{(text.split(" ").length)/200} </b>Minutes Reading</p>
                    </li>
                </ul>
                <div className="border border-primary">
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Some Text To Preview"}</p>
                </div>
                
            </div>

        </>
    );
}

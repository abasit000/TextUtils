import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to Uppercase.", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to Lowercase.", "success");
    }

    const handleClearClick = () => {
        setText("");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'#404040', color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LOWERCASE</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClearClick}>Clear</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>Copy Text</button>
            
                <h2>Your text summary:</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the above textbox to preview it here."}</p>
            </div>
        </>
    )
}

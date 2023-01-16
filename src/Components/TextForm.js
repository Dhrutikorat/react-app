import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }

    const handleLoClick = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
    }

    const handleClearClick = () => {
        let newTxt = '';
        setText(newTxt);
    }

    const handleExtraSpClick = () => {
        let newTxt = text.trim().split(/ +/).join(' ');
        setText(newTxt);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <h1 className='h1'>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button className="btn nav-button" onClick={handleUpClick}> Convert to uppercase </button>
                <button className="btn nav-button m-2" onClick={handleLoClick}> Convert to lowercase </button>
                <button className="btn nav-button m-2" onClick={handleClearClick}> Clear text </button>
                <button className="btn nav-button m-2" onClick={handleExtraSpClick}> Remove extra spaces</button>
            </div>
            <div className='container'>
                <h1 className="h2 my-4">Your text summary</h1>
                <p> {text.trim().split(" ").length} words and {text.length} characters.</p>
                <p> {0.008 * text.trim().split(" ").length} Minutes read</p>
                <h2 className='h2 mt-2'> Preview </h2>
                <p>{text}</p>
            </div>
        </>
    )
}



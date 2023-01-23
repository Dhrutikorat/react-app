import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    
    const handleUpClick = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAleart("Converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAleart("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newTxt = '';
        setText(newTxt);
        props.showAleart("Text cleared","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAleart("Copied to clipboard","success");
    }

    const handleExtraSpClick = () => {
        let newTxt = text.trim().split(/ +/).join(' ');
        setText(newTxt);
        props.showAleart("Extra spaces removed","success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? '#212529' : 'white' }}>
                <h1 className='h1'>{props.heading}</h1>
                <div className="mb-3 my-4">
                    <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#212529',color: props.mode === 'light' ? '#212529' : 'white'}} id="myBox" rows="8" value={text}></textarea>
                </div>
                <button disabled={text.length === 0} className={`btn mx-1 my-1 btn-outline-${props.mode === 'light' ? 'dark': 'light'}`} onClick={handleUpClick}> Convert to uppercase </button>
                <button disabled={text.length === 0} className={`btn mx-1 my-1 btn-outline-${props.mode === 'light' ? 'dark': 'light'}`} onClick={handleLoClick}> Convert to lowercase </button>
                <button disabled={text.length === 0} className={`btn mx-1 my-1 btn-outline-${props.mode === 'light' ? 'dark': 'light'}`} onClick={handleCopy}> Copy Text</button>
                <button disabled={text.length === 0} className={`btn mx-1 my-1 btn-outline-${props.mode === 'light' ? 'dark': 'light'}`} onClick={handleClearClick}> Clear text </button>
                <button disabled={text.length === 0} className={`btn mx-1 my-1 btn-outline-${props.mode === 'light' ? 'dark': 'light'}`} onClick={handleExtraSpClick}> Remove extra spaces</button>
            </div>
            <div className='container' style={{color: props.mode === 'light' ? '#212529' : 'white' }}>
                <h1 className="h2 my-4">Your text summary</h1>
                {/* <p> {text === '' ? 0 :text.trim().split(" ").length} words and {text.length} characters.</p> */}
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0}).length} words and {text.length} characters.</p>
                <p> {0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0}).length} Minutes read</p>
                <h2 className='h2 mt-2'> Preview </h2>
                <p>{text.length >0? text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}



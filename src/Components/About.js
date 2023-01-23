import React from 'react'

export default function About(props) {
    
    let mystyle = {
        color: props.mode === 'light' ? '#212529' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(33,37,41)',
        borderColor: props.mode === 'light'? 'none': 'rgb(85 90 95)'
    }

    let body = {
        color: props.mode === 'light' ? '#212529' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'rgb(33,37,41)',
        borderColor: props.mode === 'light'? 'none': 'rgb(85 90 95)',
        borderTop: '1px solid rgb(85, 90, 95)'
    }

    return (
        <div className='container' style={{ color: props.mode === 'light' ? '#212529' : 'white' }}>
            <h1 className='mt-4 mb-4'>About Us</h1>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button collapsed button-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle} >
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={body}>
                            Textutils are used to manipulate, analyze, and manage text such as converting to uppercase/ lowercase, copying text to clipboard, removing extra spaces,  sorting the text, finding the length of a text, and other operations. It can be used to manipulate text in a variety of ways.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button collapsed button-${props.mode}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={body}>
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

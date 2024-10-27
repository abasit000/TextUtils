import React from 'react'

export default function About(props) {
    return (
        <>
            <div className="container mt-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h5>TextUtils</h5>
                <p>
                    TextUtils is a utility which can be used to manipulate your text in the way you want. <br/>
                    TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with no character limit.
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf doctnent, essays, etc .
                </p>
            </div>
            <div className="container mt-5">
                <label htmlFor="formGroupExampleInput" className="form-label mx-1" style={{ color: props.mode === 'light' ? 'black' : 'white' }}><strong>Feedback : </strong></label>
                <input type="text" style={{ width: '50%', border: `2px solid ${props.mode === 'light' ? 'black' : 'white'}`, backgroundColor: props.mode === 'light' ? 'white' : '#404040', color: props.mode === 'light' ? 'black' : 'white' }} id="feedback" placeholder="Please give your feedback." />
                <br />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
        </>
    )
}
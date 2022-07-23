// Markdown Editor Documentation
// https://github.com/uiwjs/react-md-editor

import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { Link } from "react-router-dom"

const GettingStarted = (props) => {


    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="gettingStarted">
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
            <br/>
            <Link to="/">Go Back Home</Link> 
        </div>
    );
}

export default GettingStarted;
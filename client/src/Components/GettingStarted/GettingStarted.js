// Markdown Editor Documentation
// https://github.com/uiwjs/react-md-editor

import React from "react";
import MDEditor from '@uiw/react-md-editor';


const GettingStarted = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="gettingStarted">
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}

export default GettingStarted;

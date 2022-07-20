// Markdown Editor Documentation
// https://github.com/uiwjs/react-md-editor

import React from "react";
import MDEditor from '@uiw/react-md-editor';
import {renderData} from '../../helper'

const GettingStarted = (props) => {


    const [value, setValue] = React.useState("**Hello world!!!**");
    return (
        <div className="gettingStarted">
            <MDEditor
                value={renderData(props, 2)}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
    );
}

export default GettingStarted;

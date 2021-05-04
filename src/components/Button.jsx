import React from 'react';

function Button(props) {
    return (
        <div role="button" onClick={props.handleClick} className="p-2 text-center font-weight-bold border display-4">
            {props.children}
        </div>
    )
}

export default Button;

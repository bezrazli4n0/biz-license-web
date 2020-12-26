import React from 'react';

function TextInput(params) {
    let isPassword = false;
    const isCallback = params.onChange !== undefined;

    if (params.type !== undefined)
        if (params.type === "password")
            isPassword = true;

    return (
        <div className="pt-3">
            <label>{params.label}</label>
            <div className="input-group">
                {isPassword ? <input type="password" className="form-control" onChange={ (event) => isCallback ? params.onChange(event.target.value) : null } value={params.text} /> : <input type="text" className="form-control" onChange={ (event) => isCallback ? params.onChange(event.target.value) : null } value={params.text} />}
            </div>
        </div>
    );
}

export default TextInput;
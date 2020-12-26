import React from 'react';

function TextInput(params) {
    let isPassword = false;

    if (params.type !== undefined)
        if (params.type === "password")
            isPassword = true;

    return (
        <div className="pt-3">
            <label>{params.label}</label>
            <div className="input-group">
                {isPassword ? <input type="password" className="form-control" onChange={ (event) => params.onChange(event.target.value) } value={params.text} /> : <input type="text" className="form-control" onChange={ (event) => params.onChange(event.target.value) } value={params.text} />}
            </div>
        </div>
    );
}

export default TextInput;
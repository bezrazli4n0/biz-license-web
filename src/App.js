import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextInput from './components/TextInput';
import SoftwareSelector from './components/SoftwareSelector';

function App() {
    const [state, setState] = useState({ hwid: '', password: '', softwareID: 0 });
    const [keyState, setKeyState] = useState('');
    
    function onChangeHwid(hwid) {
        setState({
            hwid,
            password: state.password,
            softwareID: state.softwareID
        });
    }

    function onChangePassword(password) {
        setState({
            hwid: state.hwid,
            password,
            softwareID: state.softwareID
        });
    }

    function onChangeSoftware(id) {
        setState({
            hwid: state.hwid,
            password: state.password,
            softwareID: id
        });
    }

    function onClick() {
        fetch('https://ndaejzf41j.execute-api.us-east-2.amazonaws.com/default/biz_license_generator', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hwid: state.hwid,
                password: state.password,
                softwareid: parseInt(state.softwareID, 10)
            })
        })
        .then(resp => resp.json())
        .then(data => setKeyState(data.body));
    }

    return (
        <div>
            <Navbar />
            <div className="container-fluid pt-3">
                <TextInput label="HWID:" onChange={ onChangeHwid } />
                <TextInput label="Password:" type="password" onChange={ onChangePassword } />
                <SoftwareSelector onChange={ onChangeSoftware } />
                <div className="pt-3">
                    <button type="button" className="btn btn-primary" onClick={ onClick }>Generate</button>
                </div>
                <TextInput label="Key:" text={keyState} />
            </div>
        </div>
    );
}

export default App;
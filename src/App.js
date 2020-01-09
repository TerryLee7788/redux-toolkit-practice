import React from 'react';

import ShowCount from './Components/ShowCount';
import DoingCount from './Components/DoingCount';
import ShowCountConnect from './Components/ShowCount.connect'
import DoingCountConnect from './Components/DoingCount.connect'
import './App.css';

function App() {

    return (
        <div className="App">
            <h3>reduxjs toolkit 版本</h3>
            <ShowCount/>
            <DoingCount/>
            <hr/>
            <h3>connet 版本</h3>
            <ShowCountConnect/>
            <DoingCountConnect/>
        </div>
    );
}

export default App;

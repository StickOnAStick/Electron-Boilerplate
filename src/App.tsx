import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <div className=' font-bold'>React</div>
    );
}

ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>, 
    
    document.getElementById('app')
);
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function HelloReact()
{
    return(
        <h1>Hello,React JS</h1>
    );
}
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<HelloReact />);


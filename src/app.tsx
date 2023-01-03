import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

const App: React.FC = () => {
    console.log("hass api status: ", window.hass.getApiStatus());

    return (
        <>
            <h1>💖 Hello World! and User!</h1>
            <p>Welcome to your Electron application.</p>
        </>
    )
}

// After
const container = document.getElementById('main');
const root = createRoot(container!);
root.render(<App />);
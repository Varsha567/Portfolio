// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import './index.css'; // Import global styles, including Tailwind directives
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Optional: for performance metrics

// Create a root for rendering the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component wrapped in React.StrictMode for development checks
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

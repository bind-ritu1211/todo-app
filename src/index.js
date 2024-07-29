import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import './assets/style/index.css'

const DATA = [
    { id: "todo-0", name: "Banana", completed: true },
    { id: "todo-1", name: "Apple", completed: false },
    { id: "todo-2", name: "Orange", completed: false },
  ];
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App tasks={DATA} />
    </React.StrictMode>,
  )
  
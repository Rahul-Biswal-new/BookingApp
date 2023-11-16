

import React from "react";
import App from './App';
import ReactDOM from 'react-dom/client';
import SearchContextProvider from "./context/SearchContext";
// import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
  </React.StrictMode>
);

export default App;
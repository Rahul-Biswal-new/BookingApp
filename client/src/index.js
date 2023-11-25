

import React from "react";
import App from './App';
import ReactDOM from 'react-dom/client';
import SearchContextProvider from "./context/SearchContext";
import AuthContextProvider from "./context/AuthContext";
// import Login from "./pages/login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <SearchContextProvider>
    <App />
    </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

export default App;
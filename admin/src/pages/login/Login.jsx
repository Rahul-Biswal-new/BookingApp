// import "./login.scss"

// import React, { useContext, useState } from 'react'
// import "./login.css"
// import { AuthContext } from '../../context/AuthContext';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// function Login() {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined
//   });

//   const {user, loading, error, dispatch}= useContext(AuthContext);

//   const navigate = useNavigate();

//   const handleChange= (e) => {
//     setCredentials(prev => ({...prev,[e.target.id]: e.target.value}));
//   }



//   const handleLogin = async (e) => {
//     e.preventDefault();
//     dispatch({type: "LOGIN_START"});
//     try{
//       const res =  await axios.post('http://localhost:8800/api/auth/login', credentials);
//       dispatch({type: "LOGIN_SUCCESS", payload: res.data})
//       navigate('/');
//     }catch(err){
//       dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
//     }
//   }

//   // console.log(user, "user");

  
//   return (
//     <div className='login'>
//       <div className="lcontainer">
//         <input type="text" placeholder='username' id='username' className="lInput" onChange={handleChange} />
//         <input type="password" placeholder='password' id='password' className="lInput" onChange={handleChange} />
//         <button disabled={loading} onClick={handleLogin} className="lbutton">Login</button>
//         {error && <span>{error.message}</span> }
//       </div>
//     </div>
//   )
// }

// export default Login
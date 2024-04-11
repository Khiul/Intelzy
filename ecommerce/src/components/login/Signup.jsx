// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async(e) => {
//     e.preventDefault()
//     const resp=await fetch('http://localhost:3000/users',{
//         method:'POST',
//         body:JSON.stringify({name,email,password}),
//         headers:{
//             "Content-Type": "application/json",
//         }
//     })
//     const data=await resp.json()
//     if(data){
//         alert('Login Succcessfull')
//     }
//   };
//   return (
//     <main>
//       <form onSubmit={handleSubmit}>
//         <h1>Signup</h1>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           vallue={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>
//         <p>Already have an account? <Link to='/login'>Login</Link></p>
//       </form>
//     </main>
//   );
// };

// export default Signup;

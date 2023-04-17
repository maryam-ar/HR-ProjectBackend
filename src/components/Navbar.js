// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {useState, useEffect} from "react"
// export default function Navbar() {


//   const [user, setUser] = useState(null);

//   const getUser = () => {
//     fetch("http://localhost:8080/auth/login/success", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Credentials": true,
//       },
//     })
//       .then((response) => {
//         if (response.status === 200) return response.json();
//         throw new Error("authentication has been failed!");
//       })
//       .then((resObject) => {
//         console.log(resObject)
//         setUser(resObject.user);
        
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  
//   useEffect(() => {
//     getUser();
//   }, []);

//   const LocalUser = localStorage.getItem("user");
//   console.log(LocalUser);
//   console.log(user);

//   const naviagte = useNavigate();

//   const SignOut = () =>{
//     if(user)
//     {
//       window.open("http://localhost:8080/auth/logout", "_self");
//     }
//     else if(LocalUser)
//     {
//       localStorage.clear();
//       naviagte("/");
//     }
    
//   }

  


//   return (
//     <div>
//       <ul style={{listStyle:"none", display:"flex", justifyContent:"center"}}>

//         {user || LocalUser?(
//           <>
//             <li>
          
//               <button onClick={SignOut}>Sign Out</button>
          
//             </li>
//           </>
//         ):(
//           <>
//             <li>
//               <Link to="/signup">
//                 <button>Sign Up</button>
//               </Link>
//             </li>

//             <li>
//               <Link to="/">
//                 <button>Sign In</button>
//               </Link>
//             </li>
//           </>
//         )}

        

        
//       </ul>
//     </div>
//   )
// }

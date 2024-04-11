// import {createContext, useEffect, useState } from "react";

// export const LoggedInContext=createContext()

// export const LoggedInContextProvider=({children})=>{
//     const [isLogged,setIsLogged]=useState(false)
//     useEffect(()=>{
//         const isLoggedStatus=localStorage.getItem('loggedIn')
//         if(isLoggedStatus==='true'){
//             setIsLogged(true)
//         }else{
//             location.href = "/login"
//         }
//     },[])
//     return(
//         <LoggedInContext.Provider value={{isLogged}}>
//             {children}
//         </LoggedInContext.Provider>
//     )
// }
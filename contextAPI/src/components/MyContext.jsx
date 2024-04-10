import { createContext, useState } from "react";

export const MyContext=createContext();

export const MyContextProvider=({children})=>{
    const [darkMode,setDarkMode]=useState(false)
    const toggleBtn=()=>{
        setDarkMode(prev=>!prev)
    }
return(
    <MyContext.Provider value={{data:'Aakash Khiul',age:24,darkMode,toggleBtn}}>
        {children}
    </MyContext.Provider>
)
}
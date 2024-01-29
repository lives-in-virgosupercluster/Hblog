"use client";

import { useState } from "react";
import {createContext} from "react";
import { useEffect } from "react";
export const ThemeContext=createContext();
const getFromLocalStorage=()=>{
    if(typeof window!=='undefined'){
    const value=localStorage.getItem("theme");
    return value || "light";
    }
}
export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState(()=>{
        return getFromLocalStorage()
    });
    const toggle=()=>{
        setTheme(theme==='light'?'dark':'light');
    };
    useEffect(()=>{
        localStorage.setItem("theme",theme);

    },[theme]);
    return <ThemeContext.Provider value={{theme,toggle}}>
        {children}
    </ThemeContext.Provider>
};
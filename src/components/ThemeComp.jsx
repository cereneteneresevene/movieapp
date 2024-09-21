"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const themeMode = mounted ? (theme === "system" ? systemTheme : theme) : "light"; // varsayılan "light" olarak ayarlanabilir

    console.log(themeMode, "themeMode");

    return (
        <div>
              {
              mounted && (
            themeMode === "light" ? (
                <CiLight onClick={() => setTheme('dark')} className="cursor-pointer" size={25} />
            ) : (
                <CiDark onClick={() => setTheme('light')} className="cursor-pointer" size={25} />
            ) 
            )}         
        </div>          
                    
 
    );
}

export default ThemeComp;

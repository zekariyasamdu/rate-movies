import { useEffect, useState } from "react";

type useChangeThemeReturns= {
    theme: boolean, 
    setTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useChangeTheme(): useChangeThemeReturns  {

    const [theme, setTheme] = useState(() => {
        const value: string | null = localStorage.getItem('theme')
        return value === 'dark' ? false : true;

    });

    useEffect(() => {
        if (theme) {
            localStorage.setItem('theme', 'light')
            document.body.classList.remove('dark')
            return;
        }

        localStorage.setItem('theme', 'dark')
        const  value: string | null = localStorage.getItem('theme')
        if( value === 'dark') document.body.classList.add(value) 

    }, [theme])

    return { theme, setTheme }
}
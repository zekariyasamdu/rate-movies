import { useEffect, useState } from "react";


export default function useChangeTheme() {

    const [theme, setTheme] = useState(() => {
        let value: string | null = localStorage.getItem('theme')
        return value === 'dark' ? false : true;

    });

    useEffect(() => {
        if (theme) {
            localStorage.setItem('theme', 'light')
            document.body.classList.remove('dark')
            return;
        }

        localStorage.setItem('theme', 'dark')
        let value: string | null = localStorage.getItem('theme')
        value === 'dark' ? document.body.classList.add(value) : null;

    }, [theme])

    return { theme, setTheme }
}
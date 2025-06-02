import React, { createContext } from "react";

type siderBarFoucsContext = {
    menuItem: string,
    setMenuItems: React.Dispatch<React.SetStateAction<string>>
}

export const siderBarFoucsContext = createContext<siderBarFoucsContext>({
    menuItem: 'home',
    setMenuItems: () =>{}
});
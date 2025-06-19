import React, { createContext } from "react";

type timeRangeContext = {
    bar: string,
    setBar: React.Dispatch<React.SetStateAction<string>>
}

export const navBarContext = createContext<timeRangeContext>({
    bar: '',
    setBar: () =>{}
});
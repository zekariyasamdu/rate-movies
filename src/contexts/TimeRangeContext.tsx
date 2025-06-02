import React, { createContext } from "react";

type timeRangeContext = {
    headerRange: string,
    setHeaderRange: React.Dispatch<React.SetStateAction<string>>
}

export const timeRangeContext = createContext<timeRangeContext>({
    headerRange: 'day',
    setHeaderRange: () =>{}
});
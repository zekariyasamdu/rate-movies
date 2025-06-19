import React, { createContext } from "react";

type timeRangeContext = {
    query: string,
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export const queryContext = createContext<timeRangeContext>({
    query: '',
    setQuery: () =>{}
});
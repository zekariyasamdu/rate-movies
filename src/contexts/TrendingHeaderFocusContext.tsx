import React, { createContext } from "react";

type TrendingHeaderFocusContext = {
    headerItem: string,
    setHeaderItem: React.Dispatch<React.SetStateAction<string>>
}

export const trendingHeaderFocusContext = createContext<TrendingHeaderFocusContext>({
    headerItem: 'movies',
    setHeaderItem: () =>{}
});
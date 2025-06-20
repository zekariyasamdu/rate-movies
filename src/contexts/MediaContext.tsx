import React, { createContext } from "react";

type MediaContext = {
    headerItem: string,
    setHeaderItem: React.Dispatch<React.SetStateAction<string>>
}

export const mediaContext = createContext<MediaContext>({
    headerItem: 'movie',
    setHeaderItem: () =>{}
});

import type { childrenType } from "../../types/general"


export default function RootLayout({ children }: childrenType) {
    return (
        <div className="relative flex flex-col w-screen h-screen 
        ">
            {children}</div>
    )
}


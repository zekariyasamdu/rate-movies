import type { childrenType } from "../../types/general"


export default function RootLayout({ children }: childrenType) {
    return (
        <div className="relative flex flex-row w-screen h-screen bg-yellow-300">
            {children}</div>
    )
}


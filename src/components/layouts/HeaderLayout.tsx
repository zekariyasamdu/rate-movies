import type { childrenType } from "../../types/general";


export default function HeaderLayout({children}: childrenType) {
    return (
        <div className="w-full h-20 m-auto bg-purple-700">
            {children}
        </div>
    )
}

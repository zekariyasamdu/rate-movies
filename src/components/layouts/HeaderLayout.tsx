import type { childrenType } from "../../types/general";


export default function HeaderLayout({children}: childrenType) {
    return (
        <div className="w-full h-20 m-auto ">
            {children}
        </div>
    )
}

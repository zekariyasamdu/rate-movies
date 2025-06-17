import type { childrenType } from "../../types/general";


export default function HeaderLayout({children}: childrenType) {
    return (
        <div className="relative flex flex-row justify-center items-center gap-3.5 w-full h-20 m-auto ">
            {children}
        </div>
    )
}

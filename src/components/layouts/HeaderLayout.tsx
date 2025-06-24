import type { childrenType } from "../../types/general";


export default function HeaderLayout({children}: childrenType) {
    return (
        <div className="sticky top-0 z-30 flex flex-row justify-center items-center p-4 gap-3.5 w-full h-20 m-auto border-b-1 border-blue-400 bg-D-primary ">
            {children}
        </div>
    )
}

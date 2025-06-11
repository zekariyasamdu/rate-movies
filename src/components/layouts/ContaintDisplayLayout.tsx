import type { childrenType } from "../../types/general";

export default function ContaintDisplayLayout({children}: childrenType) {
    return (
        <div className="w-full h-[82.5%] flex flex-col items-center align-middle justify-center overflow-y-scroll m-auto mb-0 ">
            {children}</div>
    )
}


import type { childrenType } from "../../types/general";

export default function ContaintDisplayLayout({children}: childrenType) {
    return (
        <div className="w-full h-max flex flex-col gap-3 items-center align-middle justify-center m-auto mb-0 mt-5 ">
            {children}</div>
    )
}


import type { childrenType } from "../../types/general";


export default function SideLayout({ children }: childrenType) {
    return (
        <div className=" flex flex-col justify-center w-1/16 h-screen">
            {children}</div>
    )
}

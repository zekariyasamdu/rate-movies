import type { childrenType } from "../../types/general"


function MainLayout({ children }: childrenType) {
    return (
        <div className="relative flex flex-row  w-full h-max ml-auto ">
            {children}</div>
    )
}

export default MainLayout
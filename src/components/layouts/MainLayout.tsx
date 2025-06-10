import type { childrenType } from "../../types/general"


function MainLayout({ children }: childrenType) {
    return (
        <div className="relative w-full h-screen ml-auto bg-pink-600 ">
            {children}</div>
    )
}

export default MainLayout
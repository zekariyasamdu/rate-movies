import type { childrenType } from "../../types/general"


function HomeMainLayout({ children }: childrenType) {
    return (
        <div className="relative justify-center w-full h-screen ml-auto ">
            {children}</div>
    )
}

export default HomeMainLayout
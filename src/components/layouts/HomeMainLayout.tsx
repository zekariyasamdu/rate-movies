import type { childrenType } from "../../types/general"


function HomeMainLayout({ children }: childrenType) {
    return (
        <div className="relative flex flex-col gap-9 justify-center w-full  h-max ml-auto ">
            {children}</div>
    )
}

export default HomeMainLayout
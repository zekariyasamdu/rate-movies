import type { childrenType } from "../../types/general"


function SearchDashboardLayout({ children }: childrenType) {
    return (
        <div className="relative flex flex-col gap-5  w-30%  h-full">
            {children}</div>
    )
}

export default SearchDashboardLayout
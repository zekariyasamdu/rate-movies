import type { childrenType } from "../../types/general"

export default function FooterLayout({ children }: childrenType) {
    return (
        <div className="relative w-full h-20  mb-0 ">
            {children}
        </div>
    )
}


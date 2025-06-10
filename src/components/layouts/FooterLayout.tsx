import type { childrenType } from "../../types/general"

export default function FooterLayout({ children }: childrenType) {
    return (
        <div className="absolute  bottom-0 w-full h-20  mb-0 bg-green-700">
            {children}
        </div>
    )
}


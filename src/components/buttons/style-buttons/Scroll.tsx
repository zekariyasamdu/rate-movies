
interface ScrollProps{
    
    position: "left" | "right"
    callBack : (position : "left" | "right" ) => void
    children: React.ReactNode
    className?: string
}
function Scroll({callBack, position, children, className} : ScrollProps) {
    return (
        <button className={`${className} absolute  top-1/2 border-2 w-12 h-12 rounded-full cursor-pointer`}
            onClick={() => callBack(position)}>
                {children}
        </button>

    )
}

export default Scroll
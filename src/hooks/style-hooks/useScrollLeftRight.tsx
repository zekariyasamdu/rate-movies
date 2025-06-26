import { useRef, useState } from "react";

export default function useScrollLeftRight() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [isScrolling, setIsScrolling] = useState(false)

    const scroll = (position: 'left' | 'right') => {

        if (scrollRef.current && !isScrolling) {

            setIsScrolling(true)
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 1;
            scrollRef.current.scrollTo({
                left: position == 'left' ? scrollLeft - scrollAmount : scrollAmount + scrollLeft,
                behavior: "smooth"
            })
            setTimeout(() => {
                setIsScrolling(false)
            }, 1050)

        }
    }
    return { scrollRef, scroll };

}

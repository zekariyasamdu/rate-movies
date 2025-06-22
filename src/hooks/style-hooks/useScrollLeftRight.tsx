import { useRef } from "react";

export default function useScrollLeftRight() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = ( position : 'left' | 'right') => {

        if(scrollRef.current){
            const {scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth * 0.8;
            scrollRef.current.scrollTo({
                left: position == 'left'? scrollLeft -  scrollAmount : scrollAmount + scrollLeft,
                behavior: "smooth"
            })
        }
    }

    return {scrollRef, scroll};

}

import { useEffect, useRef } from "react";

export default function useFadeOutOnScroll() {
    const headerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const fadeOutOnScroll = () => {
            const element = headerRef?.current;
            if (!element) return;

            const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
            const elementHeight = element.offsetHeight;
            const scrollTop = document.documentElement.scrollTop;

            let opacity = 3;
            if (scrollTop > distanceToTop) {
                opacity = 1 - (1.5 * (scrollTop - distanceToTop) / elementHeight);
            }

            if (opacity >= 0) {
                element.style.opacity = opacity.toString();
            }
        };

        const scrollHandler = () => fadeOutOnScroll();

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [headerRef]);
    
    return headerRef;
}
import React from "react";

export function mergeRefs(...refs: Array<React.Ref<HTMLElement | null>>) {
    return (node: HTMLElement | null) => {
        refs.forEach(ref => {
            if (typeof ref === "function") {
                ref(node);
            } else if (ref && typeof ref === "object" && "current" in ref) {
                (ref as React.MutableRefObject<HTMLElement | null>).current = node;
            }
        });
    };
}
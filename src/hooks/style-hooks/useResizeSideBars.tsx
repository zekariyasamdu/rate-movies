import { useState } from "react";

type useResizeSideBarsReturns = {
    widthValue: string,
    position: string,
    stateOfResizeSideBar: boolean,
    setResizeSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export default function useResizeSideBars():useResizeSideBarsReturns {

    const [stateOfResizeSideBar, setResizeSideBar] = useState(true)
    let widthValue: string = stateOfResizeSideBar ? 'w-10' : 'w-50';
    let position: string = stateOfResizeSideBar ? 'items-center' : 'item-baseline';
    return {widthValue, position, stateOfResizeSideBar, setResizeSideBar}

}
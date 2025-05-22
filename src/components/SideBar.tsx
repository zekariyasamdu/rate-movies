// fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



export default function SideBar() {

    // Resizing the sidebar
    const [stateOfResizeSideBar, setResizeSideBar] = useState(true)
    let widthValue: string = stateOfResizeSideBar ? 'w-10' : 'w-50';
    function resizeSideBar(): void {
        setResizeSideBar(!stateOfResizeSideBar);
    }

    return (
        <div className={`z-20 ${widthValue}  h-screen flex justify-center bg-L-tertiary dark:bg-D-tertiary`}>
            <div className="w-max h-max cursor-pointer my-2.5 dark:hover:bg-D-primary"
                onClick={resizeSideBar}
                title="sidebar">
                <FontAwesomeIcon className="text-D-primary dark:text-L-primary "
                    icon={faBars} />
            </div>
        </div>
    )
}
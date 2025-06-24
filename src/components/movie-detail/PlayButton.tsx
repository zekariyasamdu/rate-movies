import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


type playButtonProp = {

    link: string | undefined
} & React.HTMLAttributes<HTMLButtonElement>



const PlayButton = ({ link, ...props }: playButtonProp) => {

    function playVideo(){
        const url = `https://www.youtube.com/watch?v=${link}`
        window.location.assign(url)
    }

    return (
        <button onClick={playVideo}   {...props}> <FontAwesomeIcon icon={faPlay}/> Play</button>
    )
}

export default PlayButton
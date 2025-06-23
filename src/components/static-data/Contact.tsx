import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contact() {
    return (
        <div className="flex flex-row gap-10">
            <FontAwesomeIcon icon={faGithub}/> 
            <FontAwesomeIcon icon={faLinkedin}/>
            <FontAwesomeIcon icon={faTelegram}/>
        </div>
    )
}

export default Contact
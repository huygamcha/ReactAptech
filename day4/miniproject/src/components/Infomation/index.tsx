import Avatar from "../Avatar"
import Contact from "../Contact"
import Expertise from "../Expertise"
import Skill from "../Skill"
function Infomation() {
    return (
        <div>
            <div className="avatar">
                <Avatar />
            </div>
            <div className="contact">
                <Contact />
            </div>
            <div className="expertise">
                <Expertise />
            </div>
            <div className="personal_skill">
                <Skill />
            </div>
        </div>
    )
}

export default Infomation
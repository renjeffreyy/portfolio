import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const LeftSidebar = ()=>{
    return (
        <div className="left-sidebar-container">
            <ul>
                <li><a href="https://github.com/renjeffreyy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a></li>
                <li><a href="https://www.linkedin.com/in/ren-jeffrey/" target="_blank" rel="noreferrer" aria-label="Linkedin"><FiLinkedin /></a></li>
                <li><a href="https://www.instagram.com/jeffrey_codes/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a></li>
            </ul>
        </div>
    )
}

export default LeftSidebar
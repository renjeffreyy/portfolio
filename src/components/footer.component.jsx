import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';

const Footer = () =>{
    return(
        <div className="Footer-container">
            <div className="Footer-socials-container">
                <ul>
                    <li><a href="https://github.com/renjeffreyy" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a></li>
                    <li><a href="https://www.linkedin.com/in/ren-jeffrey/" target="_blank" rel="noreferrer" aria-label="Linkedin"><FiLinkedin /></a></li>
                    <li><a href="https://www.instagram.com/jeffrey_codes/" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a></li>
                </ul>
            </div>
            <div>
                <a href="https://github.com/bchiang7/v4" rel="noreferrer" target="_blank">
                    Designed By Brittany Chiang
                </a>
                
            </div>
        </div>
    )
}

export default Footer
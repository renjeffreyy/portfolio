const Nav = () =>{
return (
    <nav className="navbar">
        <div className="logo-container">
            <p>logo placeholder</p>
        </div>
        <div className="nav-links-container">
            <ol>
                <li>
                    <a>
                        About
                    </a>
                </li>
                <li>
                    <a>
                        Experience
                    </a>
                </li>
                <li>
                    <a>
                        Work
                    </a>
                </li>
                <li>
                    <a>
                        Contact
                    </a>
                </li>
            </ol>
            <div className="resume-container">
                <a href="https://brittanychiang.com/" target="_blank" className="resume-link" rel="noopener noreferrer">Resume</a>
            </div>
        </div>

    </nav>
)
}

export default Nav
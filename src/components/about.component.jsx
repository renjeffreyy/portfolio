import photo from "../assets/jeffrey.jpg"

const About = () =>{
    const tech = ['JavaScript (ES6+)','TypeScript','React', 'Angular', 'CSS/SCSS', 'Shopify Liquid', 'Hubspot HUBL'];
    const skills = tech.map((skill,index)=>{return <li key={index}>{skill}</li>})
    
    return (
        <div className="about-container">
            <h2 className="numbered-heading">About Me</h2>
            <p>
                Hello My name is Jeffrey
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-list">
                {skills}
            </ul>
            <div className="about-pic-container">
                <div className="about-pic-wrapper">
                    <div className="img-wrapper">
                            <img aria-hidden="true" alt="jeffrey" src={photo}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
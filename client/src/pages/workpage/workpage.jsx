import React, { useState } from 'react';
import "./workpage.scss"
import resume from "../../assets/documents/Katie_Krukoff_Resume1.pdf";
import katieWorkPic from "../../assets/photos/workpage/katiework.png";

function Workpage() {
    let [showMobileSkills, toggleShowMobileSkills] = useState(false)
    const contactMethods = [
        {
            name: 'Linkedin',
            type: 'website',
            link: 'https://www.linkedin.com/in/katie-krukoff-2aa6411aa/,'

        },
        {
            name: 'Email me!',
            type: 'Email',
            link: 'mailto: katiekrukoff@gmail.com',
        },
    ]
    const skills = [
        "Ability to multi - task and meet deadlines",
        "Microsoft Office",
        "CRM",
        "Adobe",
        "Strong Communication and Interpersonal Skills",
        "Strong attention to Detail",
        "Passionate and Driven for Success",
        "Team Cooperation",
        "Time management Skills",
        "Exceeding Customer and company Expectations",
        "Proficient and experienced in a sales environment"
    ]

    return (
        <div className='workpage'>
            <div className='workpageSectionWrapper'>
                <section id='header'>
                    <div className='workpage__header-text'>
                        <h2 className='workpage__header'>Katie Krukoff! At Your service!</h2>
                        <p>With extensive experience in Administration, Customer service, Sales, and more, I have just the tools to fulfil your Professional needs!</p>
                    </div>
                    <img className='workpage__pictureMobile' src={katieWorkPic} />
                </section>
                <section id='skillsSection'>
                    <h2 className='workpage__header' onClick={() => { toggleShowMobileSkills(!showMobileSkills) }}>Skills</h2>
                    <p className = 'workpage__skills-prompt'onClick={() => { toggleShowMobileSkills(!showMobileSkills) }}>View a detailed list of my skills here!</p>

                    <ul className={`skillsList${showMobileSkills ? 'Closed' : 'Open'}`}>
                        {
                            skills.map(skill => {
                                return (
                                    <li className='skillsList__skill'>{skill}</li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section id='inquire'>
                    <h2 className='workpage__header'>Contact me</h2>
                    <ul className='workpage__inquire-list'>
                        {
                            contactMethods.map(contactMethod => {
                                return (
                                    <li className='workpage__inquire-list--wrapper'>
                                        <a className='workpage__inquire-list--item' href={contactMethod.link}>{contactMethod.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section id='Resume'>
                    <h2 className='workpage__header'>Work Experience</h2>
                    <p><a href={resume} download>Click here to view my full resume and work experience!</a></p>
                </section>
            </div>
            <div className='workpageSectionWrapper'>
                <img className='workpage__pictureTablet' src={katieWorkPic} />
            </div>
        </div>
    )
}

export default Workpage
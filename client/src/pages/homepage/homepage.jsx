import React from 'react';
import instagram_logo from '../../assets/icons/instagram.svg'
import linkedin_logo from '../../assets/icons/linkedin.svg'
import './homepage.scss'
import katieHome from "../../assets/photos/homepage/katiehome.png"
import {Link} from 'react-router-dom'


function Homepage() {
  const sections = [
    {
      name: "Administrative Personel",
      link: "/work"
    },
    {
      name: "Professional Dancer",
      link: "/dance"
    },
  ]
  const socials = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/katie-krukoff-2aa6411aa/",
      logo: linkedin_logo
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/katielkrukoff/",
      logo: instagram_logo
    },
  ]

  return (
    <div className='Homepage'>
      <section id="about">
        <ul className='listPoints'>
          {
            sections.map(section => {
              return (
                <Link to={section.link}><li className='sectionName'>{section.name}</li></Link>
              )
            })
          }
        </ul>
        <img className='katiePic' src={katieHome}/>
      </section>
      <section id="socials">
        <ul className='socials__list'>
          {
            socials.map(social => {
              return (
                <a href={social.link}>
                  <li className = "socialsListitems">
                  <img className='socialsImage' src ={social.logo} />
                   <p className='socialsName'> {social.name}</p>
                  </li>
                </a>
              )
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default Homepage;

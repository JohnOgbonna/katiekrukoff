import React, { useState } from 'react';
import burgerMenu from '../../assets/icons/hamburgerMenu.svg';
import {Link} from 'react-router-dom';
import closeIcon from '../../assets/icons/closeIcon.svg'

import './navbar.scss';

function NavBarMobile() {
    const [expanded, setExpanded] = useState(false);
    const [visible, setVisible] = useState(true);

    let sections = [
        {
            name: 'Work',
            link: '/work'
        },
        {
            name: 'Dance',
            link: '/dance'
        },
    ]
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setVisible(true)
        }else {
            if(!expanded){
                setVisible(false)   
            }

        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className={`navbarMobile${visible ? 'Visible' : 'Hidden'}`}>
            <div className=' navbarMobile__line1'>
                <h2 className='navbar__header'>Katie Krukoff</h2>
                <img className='navbar__image'
                    src={expanded ? closeIcon : burgerMenu}
                    onClick={() => { setExpanded(!expanded) }}
                />
            </div>

            <ul className={`navbarMobile__links${expanded ? 'Open' : 'Closed'}`}>
                {
                    sections.map(section => {
                        return (
                            <a href={section.link} className = "navlink"><li className='navbarMobile__link' key={section.name}>{`${section.name}`}</li></a>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default NavBarMobile;
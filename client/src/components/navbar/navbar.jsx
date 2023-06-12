import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './navbar.scss';

function NavBar(props) {
    const [visible, setVisible] = useState(true);

    let sections = [
        {
            name: 'Work',
            link: '/work',
            key: 'home'
        },
        {
            name: 'Dance',
            link: '/dance',
            key: "dance"
        },
    ]
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setVisible(true)
        } else {
            setVisible(false)
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className={`navbar${visible ? 'Visible' : 'Hidden'}`}>
            <Link to = "/"><h2 className='navbar__header'>Katie Krukoff</h2></Link>

            <ul className={`navbar__links`}>
                {
                    sections.map(section => {
                        return (
                            <Link to={section.link} className="navlink">
                                <li className='navbar__link' key = {section.name}>{`${section.name}`}
                                </li></Link>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default NavBar;
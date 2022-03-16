import React from 'react'
// import Cta from './Cta'
import avatar from '../../assets/avatar.JPG'
import HeaderSocials from './HeaderSocials'
import './header.css';
import CV from '../../assets/cv1.pdf'


function Header() {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Ying Luo</h1>
                <h5 className="text-light">Front-end Developer</h5>

                {/* <Cta /> */}
                <div className='cta'>
                    <a href={CV} download className='btn'>Download My CV</a>
                    <a href="#contact" className='btn btn-primary'>Contact me</a>
                </div>

                {/* <HeaderSocials />

                <div className="avatar">
                    <img src={avatar} alt="avatar" />
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header
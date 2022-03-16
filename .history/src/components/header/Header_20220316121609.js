import React from 'react'
import avatar from '../../assets/avatar.JPG'
import './header.css';
import CV from '../../assets/YingLuo-resume.pdf'


function Header() {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello, I'm</h5>
                <h1>Ying Luo</h1>
                <h5 className="text-light">Front-end Developer</h5>

                <div className='cta'>
                    <a href={CV} download className='btn'>Download My CV</a>
                    <a href="#contact" className='btn btn-primary'>Contact me</a>
                </div>
            </div>
        </header>
    )
}

export default Header
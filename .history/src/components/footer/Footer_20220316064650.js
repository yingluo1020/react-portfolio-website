import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';


function Footer() {
    return (
        <footer>
            <a href="https://github.com/yingluo1020" target="_blank" className='footer_logo'><FaGithub /> Ying Luo</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_copyright">
                <small>&copy; Ying Luo. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
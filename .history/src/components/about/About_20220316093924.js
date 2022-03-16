import React from 'react'
import avatar from '../../assets/avatar.JPG'
import { FaChalkboardTeacher } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { FaGithub } from 'react-icons/fa';
import './about.css';

function About() {
    return (
        <section id='about'>
            <h5>My Intro</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_image">
                        <img src={avatar} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaChalkboardTeacher className='about_icon' />
                            <h5> Self-learner on Frontend </h5><br />
                            <small>HTML/CSS, JavaScript,React,Axios...</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className='about_icon' />
                            <h5>Personal IT Projects </h5>
                            <a href="https://github.com/yingluo1020" target="_blank"><FaGithub /></a><br />
                            <small>10+ completed:</small><br />

                        </article>

                    </div>

                    <p>I am a highly motivated self-learner software developer with experience in developing a wide range of web applications and software. My core experience is on building front-end applications using HTML, CSS, JavaScript and React. Furthermore, I have developed various automated applications using Python to reduce repetitive and time-consuming tasks. I am currently seeking to be a frontend developer where I can apply my knowledge and further develop my skills.If you would like to know more about my projects and Journey please visit my GitHub. </p>
                    <div className="about_btn">
                        <a href="#contact" className="btn btn">Contact Me</a>
                        <a href="#" target="_blank" className="btn btn-primary">Go to My Projects</a>
                        <a href="https://github.com/yingluo1020" target="_blank" className="btn btn-primary"><FaGithub /></a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
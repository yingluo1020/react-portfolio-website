import React from 'react'
import './experience.css';
import { BsPatchCheck } from 'react-icons/bs'


function Experience() {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <article className='experience_details'>
                    <BsPatchCheck className='experience_details-icon' />
                    <div>
                        <h4>HTML</h4>
                        <small className='text_light'>Experienced</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsPatchCheck className='experience_details-icon' />
                    <div>
                        <h4>CSS</h4>
                        <small className='text_light'>Experienced</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsPatchCheck className='experience_details-icon' />
                    <div>
                        <h4>JavaScript (ES6+)</h4>
                        <small className='text_light'>Experienced</small>
                    </div>
                </article>
                <article className='experience_details'>
                    <BsPatchCheck className='experience_details-icon' />
                    <div>
                        <h4>React (Hooks, Router V6) </h4>
                        <small className='text_light'>Experienced</small>
                    </div>
                </article>

                <article className='experience_details'>
                    <BsPatchCheck className='experience_details-icon' />
                    <div>
                        <h4>Python</h4>
                        <small className='text_light'>Intermediate</small>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Experience
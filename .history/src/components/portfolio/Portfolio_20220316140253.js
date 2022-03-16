import React from 'react'
import './portfolio.css';
import project1 from '../../assets/todo1.jpg'
import project2 from '../../assets/search.jpg'
import project3 from '../../assets/calculator.jpg'
import project4 from '../../assets/btc_alert.jpg'



function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Projects</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container ">
                <article className='portfolio'>
                    <div className="portfolio_head">
                        <h3 >To-Do List App</h3>
                    </div>

                    <div className="portfolio_item-image">
                        <img src={project1} alt="project1" />
                    </div>

                    <div className="portfolio_link">
                        <a href="https://github.com/yingluo1020/react_todoList" target='_blank' className='btn '>Github</a>
                        <a href="http://todolist.yingluoresume.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio'>
                    <div className="portfolio_head">
                        <h3 >Github Profile Search app</h3>
                    </div>

                    <div className="portfolio_body">
                        <div className="portfolio_item-image">
                            <img src={project2} alt="project1" />
                        </div>
                    </div>
                    <div className="portfolio_link">
                        <a href="https://github.com" target='_blank' className='btn '>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio'>
                    <div className="portfolio_head">
                        <h3 >Github Profile Search app</h3>
                    </div>

                    <div className="portfolio_body">
                        <div className="portfolio_item-image">
                            <img src={project3} alt="project1" />
                        </div>
                    </div>
                    <div className="portfolio_link">
                        <a href="https://github.com" target='_blank' className='btn '>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio'>
                    <div className="portfolio_head">
                        <h3 >Cryptocurrency Price Alert program</h3>
                    </div>

                    <div className="portfolio_body">
                        <div className="portfolio_item-image">
                            <img src={project4} alt="project1" />
                        </div>
                    </div>
                    <div className="portfolio_link">
                        <a href="https://github.com" target='_blank' className='btn btn-primary'>Github</a>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default Portfolio
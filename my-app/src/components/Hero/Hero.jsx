import React from 'react'
import './Hero.css';

function Hero() {

  return (
    <section className="hero-container" id="home">
        <div className="hero-content">
            <h2>Building Digital Experiences That Inspire</h2>
            <p>
            Enthusiastic about AI/ML | Passionate App Developer | Transforming Ideas into Seamless and
                Visually Stunning App Solutions
            </p>
        <div className="download-btn-container">
            <a href="/Resume.pdf" download="Resume.pdf">
                <button className="download-btn">Download Resume</button>
            </a>
        </div>
        </div>

        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img01.png" alt="Icon 1" />
                </div>
                <img src="./assets/images/hero.jpg" alt="Hero" className="hero-i"/>
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img02.png" alt="Icon 2" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img03.png" alt="Icon 3" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.png" alt="Icon 4" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero

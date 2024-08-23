import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-container" id="about">
      <h5>About Me</h5>
      <div className='content'>
        <img src="./assets/images/hero.jpeg" alt="Hero" />
        <div className="info">
            <p>I am a creative and driven person, committed to reaching my goals and always striving to better myself. 
                I believe in making a positive impact wherever I can. My skills include expertise in HTML, CSS, React.js, Bootstrap, Flutter, and proficiency with tools like Git, GitHub, Visual Studio Code, and Android Studio. 
                I also have a strong foundation in problem-solving and a sharp eye for detail.

                <br/>
                <br/>
                In my spare time, I enjoy drawing and have a deep interest in learning new things. 
                My career aspirations include using my software development and AI/ML skills to create innovative solutions that truly benefit people. </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

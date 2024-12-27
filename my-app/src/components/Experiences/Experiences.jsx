import React, { useState } from 'react';
import { WORK_EXPERIENCES } from '../../utils/data';
import './Experiences.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Experience() {
  const [activeSection, setActiveSection] = useState('technical');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  const filteredExperiences = WORK_EXPERIENCES.filter(
    (exp) => exp.type === activeSection
  );

  return (
    <section className="exp-container" id="exp">
      <h5>Work Experience</h5>

      {/* Section Toggle Buttons */}
      <div className="button-container">
        <button
          className={activeSection === 'technical' ? 'active' : ''}
          onClick={() => handleButtonClick('technical')}
        >
          Technical
        </button>
        <button
          className={activeSection === 'non-technical' ? 'active' : ''}
          onClick={() => handleButtonClick('non-technical')}
        >
          Non-Technical
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation={true} 
        pagination={{ clickable: true }} 
        modules={[Navigation, Pagination]} 
        className="experience-swiper"
      >
        {filteredExperiences.map((experience, index) => (
          <SwiperSlide key={index}>
            <div className="information">
              <h1>{experience.title}</h1>
              <span><p>{experience.duration}</p><p>{experience.place}</p></span>
              <p>{experience.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Experience;

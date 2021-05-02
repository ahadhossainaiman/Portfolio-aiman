import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import computer from '../img/computer.svg';
import js from '../img/js.svg';
import frontend from '../img/front-end.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'React Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML5'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'CSS3'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'C'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C++'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={computer} title={'Web design'} 
                text={'I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website'}
                />
                <ServicesSection image={frontend} title={'Front-End Development'} 
                text={'I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works.'}
                />
                <ServicesSection image={js} title={'MERN Stack Web Development'} 
                text={'I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;

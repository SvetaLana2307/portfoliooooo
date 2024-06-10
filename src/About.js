// src/About.js
import React from 'react';
import profilePic from './froggie.jpeg'; // Adjust the path as necessary

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile" style={{ width: '300px', borderRadius: '50%' }} />
            <p>Привет! Меня зовут Света, я студентка 3 курса Финансового Университета при правительстве РФ.</p>
            Мечтаю стать Backend Java Developer в скорейшем будущем :) Но я лягушечка поэтому ква-ква.
        </section>
    );
};

export default About;

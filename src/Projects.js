// src/Projects.js
import React from 'react';
import gifAnimation from './pepega-hackermans.gif'; // Adjust the path as necessary

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <ul>
                <li>
                    <h3>Project 1</h3>
                    <p>Проект представляет собой информационно-справочную систему для туристического агентства, разработанную с использованием современных технологий. Система предназначена для управления данными о туристических направлениях, турах, клиентах и бронированиях, а также для предоставления удобного интерфейса для взаимодействия с клиентами.</p>

                    <h4>Технологический стек</h4>
                    <p><strong>Java</strong>: Основной язык программирования для разработки серверной части приложения.</p>
                    <p><strong>Spring Boot</strong>: Фреймворк для создания производительных, готовых к работе приложений на Java. Использовался для разработки RESTful API и управления зависимостями.</p>
                    <p><strong>Hibernate</strong>: ORM-фреймворк для Java, обеспечивающий удобное взаимодействие с базой данных.</p>
                    <p><strong>Docker</strong>: Платформа для контейнеризации приложений, обеспечивающая их независимость от среды выполнения и упрощение развертывания.</p>
                    <p><strong>React JS</strong>: Библиотека JavaScript для разработки пользовательских интерфейсов. Использовалась для создания интерактивного и отзывчивого фронтенда.</p>
                </li>
                <li>
                    <h3>Project 2</h3>
                    <p>Небольшая игра: "Быки и коровы" на языке программирования Java.</p>
                </li>
                <li>
                    <h3>Project 3</h3>
                    <p>Игра : "Крестики и нолики" на языке программироварния Java</p>
                </li>
            </ul>
            <div>
                <img src={gifAnimation} alt="Project Animation" style={{ width: '300px' }} />
            </div>
        </section>
    );
};

export default Projects;

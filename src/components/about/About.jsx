import React from 'react';
import "./about.css"

const About = () => {
    return (
        <div className="about-container">

            <section id="about" className="about-section">
                <div className="about-content">
                    <h2>О нас</h2>
                    <p>
                        Добро пожаловать на наш сайт, посвященный изучению языка жестов! Мы
                        стремимся помочь каждому, кто хочет изучить этот уникальный способ
                        общения, и содействовать инклюзии в обществе. Мы создали эту платформу,
                        чтобы сделать обучение языку жестов доступным и удобным для каждого, кто
                        хочет освоить этот уникальный способ общения. Независимо от того, новичок
                        ли вы или уже имеете опыт, наш сайт предлагает разнообразные материалы и
                        ресурсы, чтобы вы могли развивать свои навыки в своем собственном темпе.
                    </p>
                </div>
                <div className="about-image">
                    <img src="https://static1-repo.aif.ru/1/5c/5287/4e813d3b70ae642123c28aa8bf0efba3.jpg" alt="Язык жестов" />
                </div>
            </section>


            <section id="mission" className="mission-section">
                <h2>Наша миссия</h2>
                <p>
                    Мы верим в равенство и доступность. Наша цель — создать платформу, где
                    каждый может изучать язык жестов в удобном и дружелюбном формате.
                </p>
            </section>



            <section id="team" className="team-section">
                <h2>Наша команда</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <img src="https://img-webcalypt.ru/storage/memes/Q5nXVawaJRgGuBQfUsnq987N4AD6znXlytm1jfHMA8MUWbNI8tUG7oKU8IBSIpdliqsqNtXV94ngjiF1NnWSGZxxNVhFEh7C8Q9YeRELfmkwmtbPgpjBynPICLnqT0pV-md.jpeg" alt="" />
                        <h4>Жумакадыров Байел</h4>
                        <p>Инструктор языка жестов</p>
                    </div>
                    <div className="team-member">
                        <img src="https://cs13.pikabu.ru/images/big_size_comm/2024-01_3/170532707314618175.jpg" alt="" />
                        <h4>Баргыбаев Нуртилек</h4>
                        <p>Разработчик платформы</p>
                    </div>
                    <div className="team-member">
                        <img src="https://www.film.ru/sites/default/files/people/49760836-1580746.jpg" alt="" />
                        <h4>Бердибекова Нурбийке</h4>
                        <p>Координатор проектов</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
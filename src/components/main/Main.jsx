import React from 'react';
import './main.css';

function Main() {
    return (
        <main className="main">
            <section className="intro-section">
                <h1>Добро пожаловать в наш обучающий центр!</h1>
                <h3>Наш сайт создан для помощи глухонемым в обучении языку жестов.<br /> Начните свой путь к обучению прямо сейчас!</h3>
                <a href="./About">
                        <button className="learn-more-button">Узнать больше</button>
                    </a>
            </section>

            <section className="cards-section">
                <div className="card">
                    <h3>Онлайн-курсы</h3>
                    <p>Интерактивные уроки жестового языка для начинающих и продвинутых.</p>
                    <a href="#educational-videos">
                        <button className="learn-more-button">Узнать больше</button>
                    </a>

                </div>

                <div className="card">
                    <h3>Практические занятия</h3>
                    <p>Проверьте свои знания с помощью практических упражнений.</p>
                    <a href="./Azbuka">
                        <button className="learn-more-button">Узнать больше</button>
                    </a>
                </div>

                <div className="card">
                    <h3>Сообщество</h3>
                    <p>Общайтесь с другими учениками и делитесь опытом.</p>
                    <a href="./Call">
                        <button className="learn-more-button">Узнать больше</button>
                    </a>
                </div>
            </section>

            <section className="video-section" id="educational-videos">
                <h2 class="video-text">Обучающие видео</h2>
                <p class="video-text-p">Изучайте жестовый язык с помощью наших видеоматериалов.</p>
                
                <div class="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/C0rRwjGkZ-I"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/6ClBxm2P_e8"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/ct2IjG651NA"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/mR7fIlpml0M"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/RDucEwugtj8"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/J1XPinYNRfw"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/w-QWE3w8MPo"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/2tBapwEJXVc"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/Dc02OGdtnyU"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/WUqBXK5DzRI"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/z3pNspFpvYU"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/aagMJUftMTU"
                        title="Видео об обучении жестов"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        class="video-player"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}

export default Main;

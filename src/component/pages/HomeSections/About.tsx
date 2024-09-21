import React from "react";
import scss from "./About.module.scss";
import { GoTriangleRight } from "react-icons/go";

const About = () => {
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <h1>My Sliks</h1>

          <div className={scss.block}>
            <div className={scss.leftBlock}>
              <h3>
                Technical <span>Skills</span>
              </h3>
              <div className={scss.skilBlock}>
                <h5>Frontend Development:</h5>
                <ul>
                  <li>
                    <GoTriangleRight />
                    HTML5
                  </li>
                  <li>
                    {" "}
                    <GoTriangleRight />
                    CSS3
                  </li>
                  <li>
                    <GoTriangleRight />
                    JavaScript ES6+
                  </li>
                  <li>
                    {" "}
                    <GoTriangleRight />
                    React.js
                  </li>
                  <li>
                    <GoTriangleRight />
                    Redux, Toolkitx
                  </li>
                  <li>
                    <GoTriangleRight />
                    Zustand
                  </li>
                  <li>
                    <GoTriangleRight />
                    Next.js
                  </li>
                  <li>
                    <GoTriangleRight />
                    TypeScript
                  </li>
                </ul>
              </div>
              <div className={scss.skilBlock}>
                <h5>Backend Development:</h5>
                <ul>
                  <li>
                    <GoTriangleRight />
                    Node.Js
                  </li>
                  <li>
                    <GoTriangleRight />
                    Express
                  </li>
                </ul>
              </div>
              <div className={scss.skilBlock}>
                <h5>Database Management:</h5>
                <ul>
                  <li>
                    <GoTriangleRight />
                    SQL (PostgreSQL)
                  </li>
                </ul>
              </div>
              <div className={scss.skilBlock}>
                <h5>Version Control:</h5>
                <ul>
                  <li>
                    <GoTriangleRight />
                    Git, GitHub{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className={scss.rightBlock}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gukc7EnLg2lXrV35IoDl3SrhFbupHeJhuw&s"
                alt=""
              />
              <div className={scss.box}>
                <p>
                  Я создаю удобные и адаптивные интерфейсы с помощью HTML, CSS и
                  JavaScript. Использую React, NextJs для разработки динамичных
                  веб-приложений.
                </p>
                <p>
                  Работаю с серверной частью на Node.js и Express.js, а также
                  создаю API. В проектах использую базы данных PostgreSQL для
                  хранения данных.
                </p>
                <p>
                  Использую Git и работаю с платформой GitHub для контроля
                  версий и работы в команде а также ... .
                </p>
                <p>
                  Sort skils <span>Коммуникация:</span> Умею эффективно общаться
                  как устно, так и письменно, что помогает в работе с клиентами
                  и командой. Готов быстро адаптироваться и находить общий язык
                  с людьми из разных сфер.
                </p>
                <p>
                  <span>Проблемное мышление: :</span> Люблю решать сложные
                  задачи, находить решения и оптимизировать процессы. В своих
                  проектах я всегда стремлюсь найти наиболее эффективные пути
                  выполнения задач.
                </p>
                <p>
                  <span>Управление временем:</span> Эффективно распределяю
                  время, умею организовывать свою работу, что помогает соблюдать
                  сроки и выполнять проекты вовремя.
                </p>
                <div className={scss.skilBlock}>
                  <h5>Language Skills:</h5>
                  <ul>
                    <li>
                      <GoTriangleRight />
                      Русский: свободно
                    </li>
                    <li>
                      {" "}
                      <GoTriangleRight />
                      Английский: средний
                    </li>
                    <li>
                      <GoTriangleRight />
                      JavaScript ES6+
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

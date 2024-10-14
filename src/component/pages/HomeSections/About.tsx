import React from "react";
import scss from "./About.module.scss";
import { GoTriangleRight } from "react-icons/go";

const About = () => {
  return (
    <section id="about" className={scss.About}>
      <div className="container">
        <div className={scss.content}>
          <h1>My Skills</h1>

          <div className={scss.block}>
            <div className={scss.leftBlock}>
              <h3>
                Technical <span>Skills</span>
              </h3>

              <div className={scss.skilBlock}>
                <h5>Frontend Development:</h5>
                <ul>
                  <li>
                    <GoTriangleRight /> HTML5
                  </li>
                  <li>
                    <GoTriangleRight /> CSS3
                  </li>
                  <li>
                    <GoTriangleRight /> JavaScript ES6+
                  </li>
                  <li>
                    <GoTriangleRight /> React.js
                  </li>
                  <li>
                    <GoTriangleRight /> Redux, Redux Toolkit
                  </li>
                  <li>
                    <GoTriangleRight /> Zustand
                  </li>
                  <li>
                    <GoTriangleRight /> Next.js
                  </li>
                  <li>
                    <GoTriangleRight /> TypeScript
                  </li>
                </ul>
              </div>

              <div className={scss.skilBlock}>
                <h5>Backend Development:</h5>
                <ul>
                  <li>
                    <GoTriangleRight /> Node.js
                  </li>
                  <li>
                    <GoTriangleRight /> Express
                  </li>
                </ul>
              </div>

              <div className={scss.skilBlock}>
                <h5>Database Management:</h5>
                <ul>
                  <li>
                    <GoTriangleRight /> SQL (PostgreSQL)
                  </li>
                </ul>
              </div>

              <div className={scss.skilBlock}>
                <h5>Version Control:</h5>
                <ul>
                  <li>
                    <GoTriangleRight /> Git, GitHub
                  </li>
                </ul>
              </div>
            </div>

            <div className={scss.rightBlock}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gukc7EnLg2lXrV35IoDl3SrhFbupHeJhuw&s"
                alt="About Me"
              />
              <div className={scss.box}>
                <p>
                  I create user-friendly and responsive interfaces using HTML,
                  CSS, and JavaScript. I develop dynamic web applications with
                  React and Next.js.
                </p>
                <p>
                  I work on the backend with Node.js and Express.js, and I build
                  APIs. In my projects, I use PostgreSQL to manage data storage.
                </p>
                <p>
                  I use Git for version control and collaborate with teams
                  through GitHub.
                </p>
                <p>
                  <span>Communication:</span> I can communicate effectively both
                  orally and in writing, which helps in working with clients and
                  teams. I quickly adapt and find a common language with people
                  from various fields.
                </p>
                <p>
                  <span>Problem-solving:</span> I enjoy solving complex tasks,
                  finding solutions, and optimizing processes. In my projects, I
                  always aim to find the most efficient ways to accomplish
                  tasks.
                </p>
                <p>
                  <span>Time Management:</span> I organize my tasks efficiently,
                  manage my time well, and ensure deadlines are met.
                </p>
                <div className={scss.skilBlock}>
                  <h5>Language Skills:</h5>
                  <ul>
                    <li>
                      <GoTriangleRight /> Russian: Fluent
                    </li>
                    <li>
                      <GoTriangleRight /> English: Intermediate
                    </li>
                    <li>
                      <GoTriangleRight /> JavaScript ES6+
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

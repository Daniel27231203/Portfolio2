"use client";
import Image from "next/image";
import scss from "./Work.module.scss";
import Link from "next/link";
import daniDev from "../../../assets/projects/danidev.png";
import motionCinema from "../../../assets/projects/motioncinema.png";
import daniStation from "../../../assets/projects/danistattion.png";
import daniStore from "../../../assets/projects/danistore.png";
import jyrgalan from "../../../assets/projects/jurgalan.png";
import getage from "../../../assets/projects/getAgetoWork.png";
import { useEffect, useState } from "react";

const Work = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [explore, setExplore] = useState(false);
  const [role, setRole] = useState(false);

  const changeIsMobile = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    changeIsMobile();
    window.addEventListener("resize", changeIsMobile);
    return () => window.removeEventListener("resize", changeIsMobile);
  }, []);

  const project = [
    {
      title: "daniDev",
      src: daniDev,
      link: "https://portfolio2-1nrl.vercel.app/",
      description:
        "This portfolio was developed using modern technologies like Next.js, Zustand for state management, Sass for styling, and TypeScript for type safety. It reflects my passion for creating clean, scalable, and visually engaging user interfaces.",
      Technologies: "Next.js, Zustand, Sass, TypeScript.",
      Role: "Full-stack development — from architecture to implementation",
    },
    {
      title: "MotionCinema",
      src: motionCinema,
      link: "https://cinema-p-vg5l-git-daniel-daniel27231203s-projects.vercel.app/",
      description:
        "A collaborative project focused on developing a movie website aimed at enhancing user engagement through intuitive navigation and detailed movie information. This platform enables users to search, view, and explore movies efficiently.",
      Technologies: "React, Redux Toolkit, CreateAsyncThunk, Sass.",
      Role: "Both of us worked on the frontend development, emphasizing on dynamic data handling and advanced state management techniques to ensure a responsive user interface.",
    },
    {
      title: "daniStation",
      src: daniStation,
      link: "https://cinema-ashen.vercel.app/",
      description:
        "Educational project for a cinema website with the ability to view movies and book tickets. The project uses basic DOM manipulation for dynamic content display.",
      Technologies: "HTML, CSS, JavaScript (DOM)",
      Role: "Fully self-developed as part of my learning",
    },
    {
      title: "daniStore",
      src: daniStore,
      link: "https://store-lesson-project.vercel.app/",
      description:
        "Educational project for an online store, focusing on dynamic features and user interaction. Built with React for the interface and Redux Toolkit for state management.",
      Technologies: "React, Redux Toolkit, Tailwind CSS",
      Role: "Fully self-developed for personal development",
    },
    //
    {
      title: "Jyrgalan",
      src: jyrgalan,
      link: "https://jyrgalan-mini-project.vercel.app/",
      description:
        "Educational project for a travel website, focusing on functionality and user convenience. Implemented CRUD (Create, Read, Update, Delete) functionality for managing information about travel destinations.",
      Technologies: "HTML, CSS, JavaScript (DOM)",
      Role: "Fully self-developed for personal development",
    },
    {
      title: "getAge",
      src: getage,
      link: "https://fiter-to-age.vercel.app/",
      description:
        "Educational project implementing a simple functionality to check age for job applications. If the person is over 18, they can proceed with the application process.",
      Technologies: "HTML, CSS, JavaScript (DOM)",
      Role: "Fully self-developed for personal development",
    },
  ];
  return (
    <section id="work" className={scss.Work}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.contentTitle}>
            <h1>PROJECTS</h1>
            <p>My Projects: Personally Crafted with Maximum Effort</p>
          </div>
          <div
            className={
              !isMobile ? scss.block : `${scss.block} ${scss.activeBlock}`
            }
          >
            {project.map((el, end) => (
              <div
                key={end}
                className={
                  !isMobile ? scss.box : `${scss.box} ${scss.activeBox}`
                }
              >
                <Image src={el.src} alt={el.title} />
                <div className={scss.boxTitle}>
                  <h2>{el.title}</h2>
                  <div>
                    <li>Description:</li>
                    <p>
                      {!explore ? el.description.slice(0, 50) : el.description}
                      <span onClick={() => setExplore(!explore)}>
                        {explore ? "close" : "more..."}
                      </span>
                    </p>
                  </div>
                  <div>
                    <li>Technologies: </li>
                    <p>{el.Technologies}</p>
                  </div>
                  <div>
                    <li>Role:</li>
                    <p>
                      {!role ? el.Role.slice(0, 35) : el.Role}
                      <span onClick={() => setRole(!role)}>
                        {role ? "close" : "more..."}
                      </span>
                    </p>
                  </div>
                  <Link className={scss.link} target="blank" href={el.link}>
                    view
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

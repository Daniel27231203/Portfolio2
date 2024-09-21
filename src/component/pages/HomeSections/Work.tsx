import scss from "./Work.module.scss";
import Link from "next/link";
const Work = () => {
  return (
    <section id="work" className={scss.Work}>
      <div className="container">
        <div className={scss.content}>
          <h1>PROJECTS</h1>
          <div className={scss.dot}>
            <p>
              Below are some of the key projects I will be worked on, focusing
              on front-end development, user interfaces, and web applications.
              Each project showcases my experience with technologies like React,
              Vue.js, and modern JavaScript frameworks. You can explore the code
              or live versions to see the results in action.
            </p>
            <div className={scss.block}>
              <div className={scss.box}>
                {/* <Image src={"/"} alt="image" /> */}
                <div className={scss.titleBlock}>
                  <h3></h3>
                  <p></p>
                  <Link href="/">case study</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (btnCategory) => {
    setCurrentActive(btnCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === btnCategory;
    });
    setArr(newArr);
  };
  return (
    <main className="main" id="projects">
      <section className="left">
        <button
          className={currentActive === "all" ? "active" : null}
          onClick={() => {
            setCurrentActive("all");
            setArr(myProjects);
          }}
        >
          Projects
        </button>
      </section>
      <section className="right">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt="" />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectDescription}</p>
                  <div className="icons">
                    <a href={item.liveDemo} className="link" target="_blank">
                      Live demo
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;

import ProjectCard from "./ProjectCard";
import "./projectbox.css";
import dailythought from "../../assests/photo/IMG_0468.jpg"
import projcake from "../../assests/photo/IMG_0468.jpg"
import todolist from "../../assests/photo/IMG_0468.jpg"
import ReaCinema from "../../assests/photo/IMG_0468.jpg"
function ProjectBox() {
    const ReaCinemaTilte="ReaCinema";
    const ReaCinemaAbout="This is movie api project, I've created self database of movies to make this project. I've used React tailwind to make this.";
    const dailythoughtTitle="Daily Blogs"
    const dailythoughtAbout="This is blog project, in which we can create daily blogs. I've made using express, ejs.. etc"
    const todolistTitle="To-Do List"
    const todolistAbout="This is my todolist project in which we can create our task. I've done using express...etc"
    const cakeTitle="Crazy Layer"
    const cakeAbout="In this project, I've designed simple UI using HTML, CSS, javaScript"

  return (
    <div className="projects_container">
      <ProjectCard imagelink={ReaCinema}  title={ReaCinemaTilte} about={ReaCinemaAbout}/>
      <ProjectCard imagelink={dailythought} title={dailythoughtTitle} about={dailythoughtAbout} />
      <ProjectCard imagelink={todolist} title={todolistTitle} about={todolistAbout} />
      <ProjectCard imagelink={projcake} title={cakeTitle} about={cakeAbout} />
    
    </div>
  );
}

export default ProjectBox;

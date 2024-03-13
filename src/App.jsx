import SideBar from "./components/SideBar";
import ProjectPanel from "./components/NewProject";
import { useState } from "react";

function App() {
  const [allProjects, setAllProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(false);

  return (
    <div className="flex">
      <SideBar
        newProject={setSelectedProject}
        allProjects={allProjects}
        selectedProject={selectedProject}
      />
      <ProjectPanel
        selectedProject={selectedProject}
        setProject={setSelectedProject}
        addProject={setAllProjects}
      />
    </div>
  );
}

export default App;

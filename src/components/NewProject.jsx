import { v4 as uuidv4 } from "uuid";
import NothingSelected from "./NothingSelected";
import NewProjectInput from "./NewProjectInput";
import { useRef, useState } from "react";
import DisplayProjectInfo from "./DisplayProjectInfo";

export default function ProjectPanel({
  selectedProject,
  setProject,
  addProject,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    tasks: [],
    id: uuidv4(),
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addProject((prev) => {
      const copy = [...prev];
      setProject(formData);
      copy.push(formData);
      return copy;
    });
    setFormData({
      title: "",
      description: "",
      date: "",
      tasks: [],
      id: uuidv4(),
    });
  };

  const handleDelete = (projectToDelete) => {
    addProject((prev) => {
      const copy = [...prev];
      setProject(false);
      copy.pop(projectToDelete);
      return copy;
    });
  };

  const handleTaskDelete = (taskIdToDelete) => {
    setProject((prev) => {
      const copiedProject = { ...prev };
      copiedProject.tasks = copiedProject.tasks.filter(
        (task) => task.taskId !== taskIdToDelete
      );
      addProject((curr) => {
        const indexToReplace = curr.findIndex((project) => project === prev);
        if (indexToReplace !== -1) {
          let copy = [...curr];
          copy[indexToReplace] = copiedProject;
          return copy;
        }
        return curr;
      });

      return copiedProject;
    });
  };

  return (
    <div className="text-center justify-center self-center w-4/6">
      {(!selectedProject && <NothingSelected setProject={setProject} />) ||
        (selectedProject === "new" && (
          <NewProjectInput
            setProject={setProject}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        ))}

      {selectedProject.title && (
        <DisplayProjectInfo
          project={selectedProject}
          handleDelete={handleDelete}
          handleTaskDelete={handleTaskDelete}
        />
      )}
    </div>
  );
}

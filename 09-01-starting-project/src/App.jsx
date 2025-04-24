import { useState } from "react";
import AddProject from "./components/AddProject";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import ViewProject from "./components/ViewProject";

function App() {
  const [addNewProject, setAddNewProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Learning react",
      description: "Learn react description",
      date: "2023-10-01",
      tasks: [
        {
          id: 1,
          name: "task 1",
        },
        {
          id: 2,
          name: "task 2",
        },
      ],
    },
    {
      id: 2,
      name: "Mastering react",
      description: "Master react description",
      date: "2023-10-02",
      tasks: [],
    },
  ]);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className="flex h-screen">
        <SideBar
          setAddNewProject={setAddNewProject}
          projects={projects}
          setActiveProject={setActiveProject}
        />
        {addNewProject ? (
          <AddProject
            setProjects={setProjects}
            setAddNewProject={setAddNewProject}
          />
        ) : activeProject ? (
          <ViewProject
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            setProjects={setProjects}
          />
        ) : (
          <MainContent />
        )}
      </div>
    </>
  );
}

export default App;

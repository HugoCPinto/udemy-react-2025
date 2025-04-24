import Task from "./Task";

export default function ViewProject({
  activeProject,
  setActiveProject,
  setProjects,
}) {
  function handleClickDelete() {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== activeProject.id)
    );
    setActiveProject(null);
  }

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            {activeProject.name}
          </h2>
          <button
            onClick={() => handleClickDelete(event)}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          >
            Delete project
          </button>
        </div>
        <p className="text-sm text-gray-500">
          <span className="font-medium text-gray-700">Created:</span>{" "}
          {new Date(activeProject.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600">{activeProject.description}</p>
        <div className="border-t pt-4"></div>

        <Task
          activeProject={activeProject}
          setActiveProject={setActiveProject}
          setProjects={setProjects}
        />
      </div>
    </div>
  );
}

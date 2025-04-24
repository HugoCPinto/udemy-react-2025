export default function SideBar({
  setAddNewProject,
  projects,
  setActiveProject,
}) {
  return (
    <div className="w-64 bg-gray-800 text-white p-4 space-y-6">
      <h1 className="text-2xl font-bold">Your projects</h1>
      <button
        onClick={() => setAddNewProject(true)}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add a project
      </button>
      <nav className="flex flex-col space-y-2">
        {projects.map((project) => (
          <a
            key={project.id}
            className="hover:bg-gray-700 p-2 rounded"
            onClick={() => setActiveProject(project)}
          >
            {project.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

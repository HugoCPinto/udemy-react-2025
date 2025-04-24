export default function AddProject({ setProjects, setAddNewProject }) {
  function handleSaveProject(event) {
    event.preventDefault();
    const newProject = {
      id: Date.now(),
      name: event.target[0].value,
      description: event.target[1].value,
      date: event.target[2].value,
      tasks: [],
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setAddNewProject(false);
    event.target.reset();
  }

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold">Add a new project</h1>
      <form className="space-y-4" onSubmit={handleSaveProject}>
        <input
          type="text"
          placeholder="Project name"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
        <textarea
          placeholder="Project description"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        ></textarea>
        <input
          type="date"
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          Save
        </button>
      </form>
    </div>
  );
}

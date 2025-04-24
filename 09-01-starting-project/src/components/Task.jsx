export default function Task({ activeProject, setActiveProject, setProjects }) {
  function handleAddTask(event) {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      name: event.target.elements.taskname.value,
    };
    const updatedTasks = [...activeProject.tasks, newTask];
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === activeProject.id
          ? { ...project, tasks: updatedTasks }
          : project
      )
    );
    setActiveProject((prevActiveProject) => ({
      ...prevActiveProject,
      tasks: updatedTasks,
    }));
    event.target.reset();
  }

  function handleDeleteTask(event) {
    const taskId = Number(event.target.id);
    const updatedTasks = activeProject.tasks.filter(
      (task) => task.id !== taskId
    );
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === activeProject.id
          ? { ...project, tasks: updatedTasks }
          : project
      )
    );
    setActiveProject((prevActiveProject) => ({
      ...prevActiveProject,
      tasks: updatedTasks,
    }));
  }

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800">Tasks</h2>
      <form
        onSubmit={handleAddTask}
        className="flex items-center justify-between mt-4"
      >
        <input
          type="text"
          placeholder="write task..."
          name="taskname"
          className="w-1/2 p-2 rounded-md bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        >
          + Add task
        </button>
      </form>
      <table className="min-w-full mt-6 bg-white border border-gray-200 rounded-md shadow-md">
        <thead className="bg-gray-100 border-b border-gray-200">
          <tr>
            <th className="p-4 text-left text-gray-600">Task</th>
            <th className="p-4 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {activeProject.tasks.map((task) => {
            return (
              <tr key={task.id} className="border-b border-gray-200">
                <td className="p-4">{task.name}</td>
                <td className="p-4">
                  <button
                    id={task.id}
                    onClick={(event) => handleDeleteTask(event)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

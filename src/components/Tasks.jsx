export default function Tasks({ project, handleTaskDelete }) {
  let render = (
    <p className="font-medium">This project does not have any tasks yet</p>
  );
  if (project.tasks.length > 0) {
    render = (
      <ul className=" px-10 py-3 bg-stone-100 rounded-xl">
        {project.tasks.map((item, index) => {
          return (
            <li key={item.taskId} className="my-3">
              <div className="flex justify-between">
                <p className=" text-lg font-medium text-stone-900 text-center justify-center">
                  {item.taskName}
                </p>
                <button
                  className="py-2 rounded-lg px-6 mr-5 text-stone-700 hover:bg-stone-200 hover:transition font-medium	"
                  onClick={() => handleTaskDelete(item.taskId)}
                >
                  Clear
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return <div>{render}</div>;
}

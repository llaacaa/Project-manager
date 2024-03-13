export default function SideBar({ newProject, allProjects, selectedProject }) {
  return (
    <div className=" bg-stone-900 mt-20 rounded-r-3xl px-3 py-20 w-1/3 h-screen md:w-96 pl-10 ">
      <p className=" text-stone-300 text-2xl">
        <strong>YOUR PROJECTS</strong>
      </p>
      <button
        className="text-stone-100 py-2 px-4 rounded-lg bg-stone-700 mt-8 hover:bg-stone-600 hover:transition"
        onClick={() => newProject("new")}
      >
        + Add Project
      </button>
      <ul className="text-stone-400 text-xl mt-10">
        {allProjects.map((item, index) => {
          return (
            <li
              className={
                selectedProject.id === item.id
                  ? "bg-gradient-to-r from-stone-700 text-white py-1 pl-2 mb-6 cursor-pointer"
                  : "py-1 mb-6 pl-2 cursor-pointer"
              }
              key={index}
              onClick={() => newProject(item)}
            >
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

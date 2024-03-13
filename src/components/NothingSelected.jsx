export default function NothingSelected({ setProject }) {
  return (
    <div className="flex flex-col items-center mb-32">
      <img
        src="src\assets\no-projects.png"
        alt="no-projects"
        className="  w-28 h-28"
      />
      <p className=" text-4xl text-stone-600 mb-5">
        <strong>No Project Selected</strong>
      </p>
      <p className=" text-2xl text-stone-400">
        Select a project or get started with a new one
      </p>
      <button
        className="text-xl text-stone-400 py-2 px-4 rounded-lg bg-stone-700 mt-8 hover:bg-stone-600 hover:transition"
        onClick={() => setProject("new")}
      >
        Create new project
      </button>
    </div>
  );
}

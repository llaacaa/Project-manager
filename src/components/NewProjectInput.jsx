export default function NewProjectInput({
  setProject,
  handleInputChange,
  handleSubmit,
  formData,
}) {
  return (
    <form className="mb-32 mx-32" onSubmit={handleSubmit}>
      <div className="text-right font-normal text-xl">
        <button
          className="py-2 rounded-lg px-6 mr-5 text-stone-900 hover:bg-stone-200 hover:transition"
          onClick={() => setProject(false)}
        >
          Cancel
        </button>
        <button className="py-2 px-6 rounded-lg text-stone-100 bg-black hover:bg-stone-700 hover:transition">
          Save
        </button>
      </div>
      <div className="flex flex-col  text-left uppercase text-gray-600 text-l font-sans font-semibold">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="outline-none mb-5 mt-2 bg-stone-200 py-2  border-b-stone-400  border-b-2  px-3 focus:border-b-stone-800"
          name="title"
          required
          onChange={handleInputChange}
          value={formData.title}
        />
        <label htmlFor="description">Description</label>
        <textarea
          cols="30"
          rows="2"
          id="description"
          name="description"
          className="outline-none mb-5 mt-2 bg-stone-200 border-b-stone-400  border-b-2  py-2 px-3 focus:border-b-stone-800"
          required
          onChange={handleInputChange}
          value={formData.description}
        ></textarea>
        <label htmlFor="date">Due date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="outline-none mb-5 mt-2 bg-stone-200 py-2 border-b-stone-400  border-b-2  px-3 focus:border-b-stone-800"
          required
          onChange={handleInputChange}
          value={formData.date}
        />
      </div>
    </form>
  );
}

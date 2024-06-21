"use client";

const Searchbar = () => {
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button className="searchbar-btn" type="submit">
        Search
      </button>
    </form>
  );
};
export default Searchbar;

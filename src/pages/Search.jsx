const Search = () => {
  return (
    <section className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20 fixed top-10 z-10">
      <div className="w-full my-10 py-5 flex justify-between">
        <input
          type="text"
          className="w-[85%] p-2 outline-none border-2 mr-2 md:mr-0 focus:border-primary"
          placeholder="Search for products..."
        />
        <button className="bg-primary text-white  py-2 px-8 rounded-sm">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;

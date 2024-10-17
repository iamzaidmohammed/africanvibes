const ConnectWithCulture = () => {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-center flex-col mb-6">
        <h2 className="text-center text-4xl mb-1">Connect with culture</h2>
        <div className="bg-black w-24 h-0.5"></div>
      </div>
      <div className="bg-primary p-6 md:px-12 rounded-lg flex items-center justify-between mt-6">
        <div className="text-center">
          <p className="text-lg text-secondary">
            {`Explore our curated selections and immerse yourself in the stories behind each piece. Whether you're looking for a special gift, a piece of decor, or something to add a touch of tradition to your life, you'll find it here at Heritage Marketplace`}
          </p>
          <button className="mt-4 bg-secondary text-primary px-20 py-2 rounded-md">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithCulture;

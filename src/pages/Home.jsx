import Hero from "../assets/hero.jpg";
import SecImg from "../assets/sec-img.jpg";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
      <section className="relative w-full h-full">
        <div className="relative w-full overflow-hidden">
          <img src={Hero} alt="Hero image" className="w-full" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-15"></div>
        </div>
        <div className="absolute w-5/6 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col items-center gap-16 text-white sm:gap-24 lg:gap-44 lg:px-auto lg:pr-5 lg:w-full">
          <h2 className="text-sm text-wrap w-5/6 mx-auto xs:text-lg sm:text-xl md:text-3xl md:w-4/6 lg:text-6xl lg:w-full">
            Your Premier Destination for{" "}
            <span className="font-bold">Authentic</span> Indigenous and{" "}
            <span className="font-bold">Traditional</span> Products.
          </h2>
          <button className="px-2 py-1 text-xs w-fit bg-white text-black font-medium hover:bg-primary hover:text-white duration-150 sm:text-lg md:px-3 md:py-3 lg:text-4xl ">
            Explore Collections
          </button>
        </div>
      </section>

      <section className="mt-6">
        <div className="flex items-center justify-center flex-col mb-6">
          <h2 className="text-center text-4xl mb-1">Featured Items</h2>
          <div className="bg-black w-24 h-0.5"></div>
        </div>
        {/* Cards */}
        <div className="flex gap-5 items-center overflow-x-auto py-5 scroll-x">
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
        </div>
      </section>

      <section className="bg-secondary p-6 md:px-12 rounded-lg flex items-center justify-between flex-col md:flex-row mt-6">
        <div className="max-w-md mb-4 md:mb-0">
          <p className="text-lg text-gray-800">
            Our platform celebrates the rich cultural heritage and craftsmanship
            of communities from around the world, offering you unique,
            handcrafted items that tell a story.
          </p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md">
            Shop Now
          </button>
        </div>
        <img
          src={SecImg}
          alt="Pottery"
          className="w-full md:w-40 h-auto rounded-lg object-cover"
        />
      </section>

      {/* New collections */}
      <section className="mt-6 text-center">
        <div className="flex items-center justify-center flex-col mb-6">
          <h2 className="text-center text-4xl mb-1">New Collections</h2>
          <div className="bg-black w-24 h-0.5"></div>
        </div>
        {/* Cards */}
        <div className="flex flex-wrap gap-5 items-center py-5">
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
          <ProductCard name="Tie & Dye" price="$39.99" rating={3} />
        </div>

        <button className="mt-4 bg-primary text-secondary px-20 py-2 rounded-md">
          Browse More
        </button>
      </section>

      {/* Connect with culture */}
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

      <Footer />
    </main>
  );
};

export default Home;

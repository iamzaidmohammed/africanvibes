import { Helmet } from "react-helmet";

const Signupg = () => {
  return (
    <>
      <Helmet>
        <title>Create an account | African Vibes</title>
      </Helmet>
      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section>
          <form className="md:flex md:items-center md:gap-10">
            <div className="bg-tetiary w-full lg:basis-2/3">
              <h2 className="text-center text-xl pt-3">Create an account</h2>
              {/* form here */}
              <div className="px-4 py-2 md:flex md:flex-wrap md:gap-5">
                <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
                  <label htmlFor="firstName" className="text-lg">First Name</label>
                  <input  type="text"
                    placeholder="Enter your first name"
                    className="text-center bg-transparent border-2 py-2 outline-none border-primary"/>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Signupg;

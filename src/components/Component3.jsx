import computer from "../assets/illustration-laptop-desktop.svg";
import computermobile from "../assets/illustration-laptop-mobile.svg";

const Component3 = () => {
  return (
    <>
      <section className="font-overpass pb-20  overflow-hidden">
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-5 md:items-center flex flex-col 2xl:max-w-7xl mx-auto">
          <div className="">
            <picture className="">
              <source media="(min-width:1024px)" srcset={computer} />
              <img
                src={computermobile}
                alt=""
                className="w-full block mx-auto mt-10 md:-translate-x-1/4"
              />
            </picture>
          </div>
          <div className="flex flex-col text-center md:text-left px-5 mr-2">
            <h3 className="font-bold text-2xl mt-10 mb-5">
              Free, open, simple
            </h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
            <h3 className="font-bold text-2xl mt-10 mb-5">Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component3;

import image from "../assets/illustration-editor-desktop.svg";
import imagemobile from "../assets/illustration-editor-mobile.svg";

const Component1 = () => {
  return (
    <>
      <section className="font-overpass py-20  overflow-hidden">
        <h2 className="text-center font-bold text-3xl lg:text-4xl 2xl:text-5xl">
          Designed for the future
        </h2>
        <div className="mt-10 md:grid md:grid-cols-2 md:gap-5 md:items-center flex flex-col-reverse 2xl:max-w-7xl mx-auto">
          <div className="flex flex-col  text-center md:text-left  mx-5 px-5">
            <h3 className="font-bold text-2xl mt-10 mb-5">
              Introducing an extensible editor
            </h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content.The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog
            </p>
            <h3 className="font-bold text-2xl mt-10 mb-5">
              Robust content management
            </h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              youre in full control.
            </p>
          </div>
          <div className="">
            <picture className="">
              <source media="(min-width:1024px)" srcset={image} />
              <img
                src={imagemobile}
                alt=""
                className="w-full block mx-auto mt-3 md:translate-x-1/4"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component1;

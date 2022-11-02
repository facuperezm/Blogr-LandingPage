import image from "../assets/illustration-editor-desktop.svg";
import imagemobile from "../assets/illustration-editor-mobile.svg";

const Component1 = () => {
  return (
    <>
      <section className="text-center py-20">
        <h2 className="font-bold text-3xl">Designed for the future</h2>
        <div>
          <div>
            <picture>
              <source media="(min-width:768px)" srcset={image} />
              <img src={imagemobile} alt="" />
            </picture>
          </div>
          <div className="flex flex-col-reverse">
            <h3 className="font-bold">Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content.The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className="font-bold">Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              youre in full control.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component1;

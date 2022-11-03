const Buttons = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <button className="rounded-full font-bold md:text-white-color md:px-5 md:py-2">
              Login
            </button>
          </li>
          <li>
            <button className="btn-light font-bold bg-white-color rounded-full md:px-8 md:py-2 hover:bg-blue-50">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Buttons;

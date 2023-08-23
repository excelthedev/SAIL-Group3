import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div>
          <p>
            OOOPS LOOKS LIKE YOU CAME TO A WRONG PAGE, KINDLY GO BACK TO THE{" "}
            <Link to="/">
              {" "}
              <span className="font-bold text-[#89D92B]">HOMEPAGE PLEASE</span>
            </Link>
          </p>

          <img src="https://i.ibb.co/ck1SGFJ/Group.png" alt="not found" />
        </div>
      </div>
    </>
  );
};

export default Notfound;

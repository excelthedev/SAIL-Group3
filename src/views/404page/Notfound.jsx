import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
      <div className="lg:px-24 lg:py-20 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 h-screen">
        <div className="grid items-center justify-center">
          <div className="flex justify-around">
            <p className="text-center text-[6rem] text-[#020061]">404 ERROR</p>
            <img
              src="https://i.ibb.co/ck1SGFJ/Group.png"
              alt="not found"
              height={100}
              width={200}
            />
          </div>

          <p className="text-[1.3rem] text-[#020061]">
            OOOPS LOOKS LIKE YOU CAME TO A WRONG PAGE, KINDLY GO BACK TO THE{" "}
            <Link to="/">
              <span className="font-bold text-[#89D92B]">HOME PAGE</span> PLEASE
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Notfound;

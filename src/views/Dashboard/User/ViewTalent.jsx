import { HiOutlineBriefcase } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { BsStarFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Test = () => {
  const location = useLocation();
  const userData = location.state;
  console.log(userData.phoneNumber);

  const gh = userData.phoneNumber.slice(1, 11);
  console.log(gh);

  const whatsApp = `https://wa.me/${+"234"}${gh}?text=Hi%20I'm%20from%20Talent%20Base`;
  return (
    <>
      <div className=" flex flex-row justify-between items-start p-10">
        <div className=" flex flex-col gap-10 ">
          <div class="w-96 h-12 justify-start items-center gap-2 inline-flex">
            <div class="w-12 h-12 relative">
              <div class="w-12 h-12 left-0 top-0 absolute bg-blue-950 rounded-full"></div>
              <div class="left-[16px] top-[15px] absolute text-white text-xl font-medium leading-none">
                G
              </div>
            </div>
            <div class="text-black text-xl font-semibold leading-none">
              {userData.first_name + " " + userData.last_name}
            </div>
          </div>

          <div className=" flex justify-start items-center gap-10">
            <div class="text-zinc-600 text-sm font-normal leading-none  inline-flex gap-2">
              <HiOutlineBriefcase />
              {userData.profession}
            </div>
            <div class="text-neutragitl-700 text-sm font-light leading-none  inline-flex gap-2">
              <GrLocation />
              {userData.state + " , " + userData.country}
            </div>
          </div>

          <div class="w-96  flex-col justify-start items-start gap-4 inline-flex">
            <div class="text-black text-base font-medium">About</div>
            <div class="w-[30rem] px-4 py-5 bg-neutral-100 rounded-3xl justify-start items-start gap-2.5 inline-flex">
              <div class="grow shrink basis-0 text-neutral-700 text-base font-normal leading-tight">
                {userData.aboutYou}
              </div>
            </div>
          </div>

          <a href={whatsApp} target="_blank">
            <div class="w-60 px-16 py-4 bg-blue-950 rounded-3xl justify-center items-center gap-2.5 inline-flex mt-10 cursor-pointer">
              <div class="text-lime-500 text-sm font-medium leading-none">
                Get in touch
              </div>
            </div>
          </a>
        </div>

        <div>
          <div class="w-72 h-72 flex-col justify-start items-start gap-8 inline-flex">
            <div class="flex-col justify-start items-start gap-2 flex">
              <div className="text-black text-base font-medium leading-none">
                Status
              </div>
              <div
                className={
                  userData.status === "Available"
                    ? "px-4 py-2 bg-[#F6FCEF] rounded-2xl justify-center items-center gap-2.5 inline-flex"
                    : "px-4 py-2 border-red-600 border-2 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                }
              >
                <div
                  className={
                    userData.status === "Available"
                      ? "text-lime-300 text-l font-normal leading-none"
                      : "text-red-600 text-l font-normal leading-none"
                  }
                >
                  {userData.status}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-72 justify-between items-start gap-[100px] inline-flex">
                <div className="text-black text-base font-medium leading-none">
                  Average Rating
                </div>
                <div className="justify-start items-center gap-1 flex">
                  <div className="text-zinc-500 text-sm font-normal leading-none inline-flex gap-2">
                    <BsStarFill className="text-[#020061]" />
                    4.8
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="w-72 justify-between items-start gap-[100px] inline-flex">
                  <div className="text-black text-sm font-normal leading-none">
                    Osup Emmanuel
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-zinc-500 text-sm font-normal leading-none inline-flex gap-1">
                      <BsStarFill className="text-[#020061]" />
                      5.0
                    </div>
                  </div>
                </div>
                <div className="w-72 justify-between items-center gap-[100px] inline-flex">
                  <div className="text-black text-sm font-normal leading-none">
                    Matthew Ola
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-zinc-500 text-sm font-normal leading-none inline-flex gap-2">
                      <BsStarFill className="text-[#020061]" />
                      4.7
                    </div>
                  </div>
                </div>
                <div className="w-72 justify-between items-center gap-[100px] inline-flex">
                  <div className="text-black text-sm font-normal leading-none">
                    Omosefe Igb
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-zinc-500 text-sm font-normal leading-none inline-flex gap-2">
                      <BsStarFill className="text-[#020061]" />
                      4.6
                    </div>
                  </div>
                </div>
                <div className="w-72 justify-between items-center inline-flex gap-[100px]">
                  <div className="text-black text-sm font-normal leading-none">
                    Oguns Sharaf
                  </div>
                  <div className="justify-start items-center gap-1 flex ">
                    <div className="text-zinc-500 text-sm font-normal leading-none inline-flex gap-2">
                      <BsStarFill className="text-[#020061]" />
                      4.8
                    </div>
                  </div>
                </div>
                <div className="w-72 justify-between items-end inline-flex gap-[100px]">
                  <div className="text-black text-sm font-normal leading-none">
                    Modupe Efe
                  </div>
                  <div className="justify-start items-center gap-1 flex">
                    <div className="text-zinc-500 text-sm font-normal leading-none inline-flex  gap-2">
                      <BsStarFill className="text-[#020061]" />
                      4.9
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;

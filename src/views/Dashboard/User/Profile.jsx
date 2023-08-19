const Profile = () => {
  return <div>

      <div className='container flex flex-row'>
        <div className='container p-6 overflow-y-auto'>
            <div className="w-[586px] h-[831px] flex-row justify-start items-start gap-8 inline-flex">
                <div>
                <div className="flex-col justify-start items-start gap-8 flex ">
                    <div className="text-black text-2xl font-bold">Personal Information</div>
                    <div className="flex-col justify-start items-start gap-8 flex">
                    <div className="justify-start items-start gap-8 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-black text-lg font-normal">First Name</div>
                        <div className="w-[277px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-neutral-700 text-base font-medium">Ogunmepon</div>
                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-black text-lg font-normal">Last Name</div>
                        <div className="w-[277px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-neutral-700 text-base font-medium">Sharafa</div>
                        </div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="text-black text-lg font-normal">Email Address</div>
                        <div className="w-[586px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-center gap-2.5 inline-flex">
                        <div className="text-neutral-700 text-base font-medium">ogunmeponsharafa@gmail.co</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="text-black text-base font-medium">About</div>
                        <div className="w-[473px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-neutral-700 text-base font-normal leading-tight">Passionate engineer with a history of innovative problem-solving. Extensive experience in designing and optimizing complex systems. Skilled at collaborating across multidisciplinary teams, driving projects from concept to reality. Constantly seeking to push technical boundaries and deliver impactful solutions. I use C++. Golang and React for Development</div>
                        </div>
                    </div>
                    <div className="justify-start items-start gap-8 inline-flex">
                        <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-black text-lg font-normal">Profession </div>
                        <div className="w-[277px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-neutral-700 text-base font-medium leading-[18px]">Software Engineer</div>
                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="text-black text-lg font-normal">Location</div>
                        <div className="w-[277px] px-4 py-[22px] bg-neutral-100 rounded-[38px] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-neutral-700 text-sm font-light leading-[18px]">Lagos,  Nigeria</div>
                        </div>
                        </div>
                    </div>
                      <button type="reset" className="w-[194px] px-16 py-4 bg-blue-950 rounded-[46px] justify-center items-center gap-2.5 inline-flex text-lime-500 text-sm font-medium leading-[18px]">Edit</button>
                    </div>
                  <div className="flex-col justify-start items-start gap-8 flex">
                      <div className="text-black text-2xl font-bold">Security </div>
                      <div className="text-blue-950 text-lg font-medium">Reset  password</div>
                  </div>
                </div>
                </div>
                
                <div className="flex-col p-2 justify-start items-start gap-8 inline-flex ml-[80px]">
                    <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-black text-base font-medium leading-[18px]">Status</div>
                    <div className="px-2 py-1 bg-green-50 rounded-[17px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-lime-300 text-xs font-normal leading-[18px]">Available</div>
                    </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-6 flex">
                    <div className="w-[285px] justify-between items-start gap-30 inline-flex">
                        <div className="text-black text-base font-medium leading-[18px]">Average Rating</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                        <div className="text-zinc-500 text-sm font-normal leading-[18px]">4.8</div>
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="w-[285px] justify-between items-start gap-[100px] inline-flex">
                        <div className="text-black text-sm font-normal leading-[14px]">Osuporu Emmanuel</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                            <div className="text-zinc-500 text-sm font-normal leading-[18px]">5.0</div>
                        </div>
                        </div>
                        <div className="w-[285px] justify-between items-center gap-[100px] inline-flex">
                        <div className="text-black text-sm font-normal leading-[14px]">Matthew Ola</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                            <div className="text-zinc-500 text-sm font-normal leading-[18px]">4.7</div>
                        </div>
                        </div>
                        <div className="w-[285px] justify-between items-center gap-[100px] inline-flex">
                        <div className="text-black text-sm font-normal leading-[14px]">Omosefe Igb</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                            <div className="text-zinc-500 text-sm font-normal leading-[18px]">4.6</div>
                        </div>
                        </div>
                        <div className="w-[285px] justify-between items-center gap-[100px] inline-flex">
                        <div className="text-black text-sm font-normal leading-[14px]">Oguns Sharaf</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                            <div className="text-zinc-500 text-sm font-normal leading-[18px]">4.8</div>
                        </div>
                        </div>
                        <div className="w-[285px] justify-between items-end gap-[100px] inline-flex">
                        <div className="text-black text-sm font-normal leading-[14px]">Modupe Efe</div>
                        <div className="justify-start items-center gap-1 flex"><svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Star 1" d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z" fill="#020061"/></svg>
                            <div className="text-zinc-500 text-sm font-normal leading-[18px]">4.9</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>

  </div>;
};

export default Profile;

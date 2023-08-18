<form action="#">
  {nextPage ? (
    <>
      <div className="grid grid-cols-2 gap-[3rem] items-center pb-4">
        <div className="grid">
          <p className="text-[20px] mb-2">Select Field</p>
          <select
            name="Field"
            id="field"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          >
            <option value="1">Technology</option>
            <option value="1">Education</option>
            <option value="1">Health</option>
            <option value="1">Sports</option>
          </select>
        </div>

        <div className="grid ">
          <p className="text-[20px] mb-2">Enter Your Profession</p>
          <input
            type="text"
            placeholder="What's your profession"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>
      </div>

      <div className="grid pb-12">
        <p className="text-[20px]">
          Tell me about yourself in more than 30 characters
        </p>
        <textarea
          type="email"
          placeholder="Tell us about yourself in a few words"
          className=" outline-none rounded-2xl px-8 py-6 bg-[#F5F5F5]"
        />
        <p className="text-[#020061] pt-2">
          This information would be displayed publicly alongside your profile,
          to easy your talent monetization.
        </p>
      </div>

      <button
        type="submit"
        className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full"
      >
        Create Profile
      </button>
    </>
  ) : (
    <>
      <div className="grid grid-cols-2 gap-[3rem] items-center pb-4">
        <div className="grid">
          <p className="text-[20px] mb-2">First Name</p>
          <input
            type="text"
            placeholder="firstName"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>

        <div className="grid ">
          <p className="text-[20px] mb-2">Last Name</p>
          <input
            type="text"
            placeholder="lastName"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>
      </div>

      <div className="grid pb-4">
        <p className="text-[20px] mb-2">Email Address</p>
        <input
          type="email"
          placeholder="Email Address"
          className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
        />
      </div>

      <div className="grid grid-cols-2 gap-[3rem] items-center pb-5">
        <div className="grid">
          <p className="text-[20px] mb-2">Create Password</p>
          <input
            type="text"
            placeholder="••••••••"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>

        <div className="grid ">
          <p className="text-[20px] mb-2">Confirm Password</p>
          <input
            type="text"
            placeholder="••••••••"
            className=" rounded-full px-6 py-5 bg-[#F5F5F5]"
          />
        </div>
      </div>

      <button
        className="bg-[#020061] text-[#89D92B] font-medium p-5 rounded-full shadow-[3px_4px_1px_#89D92B] w-full"
        onClick={() => setNextPage(!nextPage)}
      >
        Next
      </button>
    </>
  )}
</form>;

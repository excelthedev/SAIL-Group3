const Test = () => {
  return (
    <div className="grid grid-cols-2 px-6 py-8">
      <div className="bg-red-400">
        <div className="bg-yellow-500">
          <p className="p-6 rounded-2xl bg-gray-500">G</p>
          <p className="">User full Name</p>
        </div>
        <div className="flex gap-4 bg-pink-500">
          <p>software engineer</p>
          <p>Lagos,nigeria</p>
        </div>
        <p className="bg-orange-300">About</p>
        <div className="bg-yellow-200 p-4 rounded-2xl">
          Passionate engineer with a history of innovative problem-solving.
          Extensive experience in designing and optimizing complex systems.
          Skilled at collaborating across multidisciplinary teams, driving
          projects from concept to reality. Constantly seeking to push technical
          boundaries and deliver impactful solutions. I use C++. Golang and
          React for Development
        </div>
        <p className="mt-4 p-4 bg-slate-600 inline-block rounded-full">
          Get in Touch
        </p>
      </div>
      <div className="bg-blue-600">
        <p>itme 1</p>
        <p>item 3</p>
        <p>item 4</p>
      </div>
    </div>
  );
};

export default Test;

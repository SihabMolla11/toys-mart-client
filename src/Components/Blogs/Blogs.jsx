import React from "react";

const Blogs = () => {
  return (
    <div className="flex justify-center mt-48 text-6xl">
      <div className="flex items-center  gap-5">
        <span
          className="inline-block h-20 w-20 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></span>
        Loading......
      </div>
    </div>
  );
};

export default Blogs;

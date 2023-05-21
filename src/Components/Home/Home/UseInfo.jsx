import React, { useEffect, useState } from "react";

const UseInfo = () => {
  const [useInfo, setUseInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/useInfo")
      .then((res) => res.json())
      .then((data) => setUseInfo(data));
  }, []);
  console.log(useInfo);

  return (
    <div className="my-10 my-Container">
      <div className="grid gap-20 grid-cols-3">
        {useInfo.map((info) => (
          <div key={info._id}>
            <div className="card w-full h-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={info?.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{info?.title}</h2>
                <p>{info?.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseInfo;

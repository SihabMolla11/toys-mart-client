import { useEffect, useState } from "react";

const UseInfo = () => {
  const [useInfo, setUseInfo] = useState([]);
  useEffect(() => {
    fetch("https://assingment-11-sarver-sihabmolla11.vercel.app/useInfo")
      .then((res) => res.json())
      .then((data) => setUseInfo(data));
  }, []);
  console.log(useInfo);

  return (
    <div className=" my-Container mb-10" data-aos="fade-in">
      <div>
        <h2 className="text-4xl font-semibold text-center mb-2">How it word</h2>
        <p className="text-center text-lg mb-8">
          Flow the section and Work step by step
        </p>
      </div>

      <div className="grid gap-20 px-20 grid-cols-1 lg:grid-cols-3">
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

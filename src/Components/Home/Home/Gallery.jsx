import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/galleryImg")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div className="my-Container my-10">
      <div className="text-center">
        <h2 className="text-4xl mb-4 font-medium">
          famous toys collections for video game
        </h2>
        <p>
          Here are you may show images of Our famous video game toys collection.{" "}
          <br /> If you want your toys to be here so, post your best video game
          toys collection here without delay.
        </p>
      </div>
      <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {gallery.map((gImg) => (
          <div
            key={gImg._id}
            className="hover:scale-110  duration-500 bg-base-100 p-3 border-2 shadow-xl rounded-lg"
          >
            <div className="">
              <img src={gImg.img} alt="Shoes" className="h-full  rounded-md " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

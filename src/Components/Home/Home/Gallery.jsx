import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/galleryImg")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div className="my-Container my-4">
      <h2 className="text-4xl font-medium">
        famous video game collections
      </h2>
      <p>
        Here are you may show images Our famous video game collection. <br /> If
        you want your gamae to be here too, post your best game here without
        delay.{" "}
      </p>
      <div className="grid mt-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {gallery.map((gImg) => (
          <div
            key={gImg._id}
            className=" bg-base-100 p-3 border-2 shadow-xl rounded-lg"
          >
            <img src={gImg.img} alt="Shoes" className="h-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

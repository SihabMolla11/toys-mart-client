import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/galleryImg")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  return (
    <div className="my-Container">
      <h2 className="text-4xl font-medium my-4">famous video game Game collections</h2>
      <p>Here are you may show images Our famous video game collection. </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {gallery.map((gImg) => (
          <div
            key={gImg._id}
            className=" bg-base-100 p-3 border-2 shadow-xl rounded-lg"
          >
            <img src={gImg.img} alt="Shoes" className="h-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

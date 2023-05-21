const Carousel = () => {
  return (
    <div className="my-Container mb-10">
      <div className=" space-y-4 mb-3 ml-4">
        <h2 className="text-4xl font-semibold ">
          We have many of Video game collection
        </h2>
        <p>
          We have several categories of video game toys. We have children video
          game toys. We also have mobile video game toys. <br /> Also we have
          some pc video game toys and virtual reality game toys. If you want to
          be our companion on this journey,
          <br /> please login today and add to your collection best video game
          toys collection on our website.
        </p>
      </div>
      <div className="carousel h-[500px] rounded-lg  w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.indianexpress.com/2023/04/nintendo-switch-1.jpg?w=414"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://cdn.shopify.com/s/files/1/1147/9166/products/49_grande.jpg?v=1481664333g"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://static.independent.co.uk/2022/11/09/12/gaming%20guide%20indybest.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41DL4vDvz8L._AC_.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

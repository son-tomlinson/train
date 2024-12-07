import React, { useState } from "react";
import "../stylesheet/Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';

SwiperCore.use([SwiperCore.Navigation]);

const Portfolio = () => {
  const images = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: `https://via.placeholder.com/150?text=Image+${i + 1}`,
    category: ["Nature", "Animals", "Technology", "Art", "Food", "People"][i % 6], // Assign categories cyclically
  }));

  const categories = ["All", "Nature", "Animals", "Technology", "Art", "Food", "People"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 10;

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to the first page when category changes
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resetFilter = () => {
    setActiveCategory("All");
    setCurrentPage(1); // Reset to the first page
  };


  //Video Carousel

    const videos = [
      { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 1" },
      { id: 2, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 2" },
      { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 3" },
      { id: 4, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 4" },
      { id: 5, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 5" },
      { id: 6, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 6" },
    ];
  
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");
  
    const handleCardClick = (videoSrc) => {
      setCurrentVideo(videoSrc);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };


  return (
    <section id="portfolio" className="section">
      <div className="heading">
        <h4>Hello Man</h4>
        <h1>Welcome to Aiimtech</h1>
      </div>

      <div className="maincategory">
        <div id="category">
          <h3>JONES JEBARAJ</h3>
          <h2>UI/UX Designer</h2>
        </div>
        <div id="category">
          <h3>kill me</h3>
          <h2>UI/UX</h2>
        </div>
        <div id="category">
          <h3>Nothing More than</h3>
          <h2>UI/UX Designer</h2>
        </div>
        <div id="category">
          <h3>JONES JEBARAJ</h3>
          <h2>UI/UX Designer</h2>
        </div>
        <div id="category">
          <h3>JONES JEBARAJ</h3>
          <h2>UI/UX Designer</h2>
        </div>
        <div id="category">
          <h3>JONES JEBARAJ</h3>
          <h2>UI/UX Designer</h2>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="photogallery">
        {/* Filter Tabs */}
        <div className="filter-controls">
          <div className="tabs">
            {categories.map((category) => (
              <button
                key={category}
                className={`tab ${activeCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button className="reset-filter" onClick={resetFilter}>
            Reset
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {currentImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={`Image ${image.id}`} />
              <p>{image.category}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            className="arrow-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="arrow-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/*Video Slider*/}

      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop
          navigation={{
            nextEl: ".swiper-button-next", // Specify the button for next
            prevEl: ".swiper-button-prev", // Specify the button for prev
          }}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="video-card" onClick={() => handleCardClick(video.src)}>
                <video src={video.src} muted loop className="video-preview"></video>
                <h3>{video.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="swiper-button-next">Next</div>
        <div className="swiper-button-prev">Prev</div>

        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <video src={currentVideo} controls autoPlay className="video-player"></video>
              <button onClick={handleCloseModal} className="close-btn">Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

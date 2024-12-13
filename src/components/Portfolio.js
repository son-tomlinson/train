import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../stylesheet/Portfolio.css";
import imageData from "../imageData.json";

const Portfolio = () => {
  const categories = ["All", "Nature", "Animals", "Technology", "Art", "Food", "People"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showImageModal, setShowImageModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalImages, setModalImages] = useState(imageData.images);

  const imagesPerPage = 12;
  const filteredImages = activeCategory === "All"
    ? imageData.images
    : imageData.images.filter((image) => image.category === activeCategory);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  
  
  // Paginate the filtered images
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  // Handle category change in PhotoGallery
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Open image modal with images of the selected category
  const openImageModal = (index, categoryImages) => {
    setModalImages(categoryImages);
    setCurrentImageIndex(index);
    setShowImageModal(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setShowImageModal(false);
  };

  // Navigate through images in modal
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < modalImages.length ? prevIndex + 1 : 0
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : modalImages.length - 1
    );
  };

    // Video carousel data
    const videos = [
      { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 1" },
      { id: 2, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 2" },
      { id: 3, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 3" },
      { id: 4, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "Video 4" },
    ];
  
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");
  
    // Handle video card click
    const handleCardClick = (videoSrc) => {
      setCurrentVideo(videoSrc);
      setShowModal(true);
    };
  
    // Close modal
    const handleCloseModal = () => {
      setShowModal(false);
    };

  return (
    <section id="portfolio" className="section">


      {/* Main Category Section */}

      <div className="heading">
        <h4>Pricing</h4>
        <h1>Choose your plan to Continue</h1>
      </div>

      <div className="maincategory container">
        {categories.slice(1).map((category, index) => (
          <div
            key={index + 1}
            id={`category`}
            className={`category${index + 1}`}
            onClick={() => {
              const categoryImages = imageData.images.filter(
                (image) => image.category === category
              );
              openImageModal(0, categoryImages); // Open modal with images of the category
            }}
          >
            <h3>{`Category ${index + 1}`}</h3>
            <h2>{`${category} Designs`}</h2>
          </div>
        ))}
      </div>


      {/* PhotoGallery Section */}

      <div className="heading">
        <h4>Pricing</h4>
        <h1>Choose your plan to Continue</h1>
      </div>

      <div className="photogallery container">
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
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {currentImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() =>
                openImageModal(
                  (currentPage - 1) * imagesPerPage + index,
                  filteredImages
                )
              }
            >
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

      {/* Image Viewer Modal */}
      {showImageModal && (
        <div className="modal-overlay" >
          <div className="modal">
            <button className="close-btn" onClick={closeImageModal}>
              Close
            </button>
            <div className="previmage">
            <img
                src={
                  modalImages[
                    (currentImageIndex - 1 + modalImages.length) % modalImages.length
                  ].src
                }
                alt="Previous Thumbnail"
                className="thumbnail prev-thumbnail"
                onClick={handlePrevImage}
              />

            <img
              src={modalImages[currentImageIndex].src}
              alt={`Image ${modalImages[currentImageIndex].id}`}
              className="modal-image"
            />

            <img
                src={
                  modalImages[
                    (currentImageIndex + 1) % modalImages.length
                  ].src
                }
                alt="Next Thumbnail"
                className="thumbnail next-thumbnail"
                onClick={handleNextImage}
              />
              </div>

            <div className="modelbuttons">
            <button className="prev-btn" onClick={handlePrevImage}>
              Prev
            </button>
            <button className="next-btn" onClick={handleNextImage}>
              Next
            </button>
            </div>

            {/* Thumbnails for next and previous images */}

          </div>
        </div>
      )}


      <div className="heading">
        <h4>Pricing</h4>
        <h1>Choose your plan to Continue</h1>
      </div>

        {/* Video Slider */}
        <div className="portfoliovideos container">
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          loop
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Navigation]}
          breakpoints={{
            1500:{
              slidesPerView:3,
            },
            0: {
              slidesPerView:2,
            }
          }

          }
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
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>

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

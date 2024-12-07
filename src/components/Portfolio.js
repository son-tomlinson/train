import React, { useState } from "react";
import "../stylesheet/Portfolio.css";

const Portfolio = () => {
  const images = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    src: `https://via.placeholder.com/150?text=Image+${i + 1}`,
    category: ["Nature", "Animals", "Technology", "Art", "Food", "People"][
      i % 6
    ], // Assign a category cyclically
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
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const resetFilter = () => {
    setActiveCategory("All");
    setCurrentPage(1); // Reset to the first page
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

      {/* Gallery Component */}
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

      <div className="gallery-grid">
        {currentImages.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={`Image ${image.id}`} />
            <p>{image.category}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`page-button ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

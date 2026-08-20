import { useState } from "react";
import Navbar from "../components/common/navigation/Navbar";
import Footer from "../components/common/Footer";
import "../css/gallery.css";
import { gallery, categories } from "../data/gallery";
import { CgClose } from "react-icons/cg";
import SEO from "../components/common/SEO";

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxImage, setLightboxImage] = useState(null);

    const filteredGallery = selectedCategory === "All"
        ? gallery
        : gallery.filter(item => item.category === selectedCategory);

    return (
        <>
            <SEO
                title="School Gallery"
                description="View photos of school life, events, sports, and facilities at Moi Educational Centre."
                url="/gallery"
            />
            <Navbar />
            <div className="gallery-header">
                <div className="inner-row">
                    <h1>Our Gallery</h1>
                    <p>A glimpse into life at Moi Educational Centre</p>
                </div>
            </div>

            <section className="gallery-section">
                <div className="inner-row">
                    <div className="gallery-filters">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={selectedCategory === cat ? "active" : ""}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="gallery-grid">
                        {filteredGallery.map((item) => (
                            <div
                                key={item.id}
                                className="gallery-item"
                                onClick={() => setLightboxImage(item)}
                            >
                                <img src={item.image} alt={item.title} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {lightboxImage && (
                <div className="lightbox" onClick={() => setLightboxImage(null)}>
                    <span className="close-lightbox"><CgClose /></span>
                    <img src={lightboxImage.image} alt={lightboxImage.title} onClick={(e) => e.stopPropagation()} />
                    <p onClick={(e) => e.stopPropagation()}>{lightboxImage.title}</p>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Gallery;

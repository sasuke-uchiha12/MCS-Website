import React from "react";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";

const Gallery = () => {
    return (
        <div>
            <Navbar />
            <ImageViewer/>
            <ContactSection />
            <Footer/>
        </div>
    );
}

export default Gallery;
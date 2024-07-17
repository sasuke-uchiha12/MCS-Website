import React from "react";
import UpcomingEvents from "../components/UpcomingEvents";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactSection from "../components/ContactSection";
import FilterEvents from "../components/FilterEvents";
import '../css/Events.css';

const Events = () => {
    return (
        <div>
            <Navbar/>
            <UpcomingEvents />
            <FilterEvents/>
            <ContactSection/>
            <Footer />
        </div>
    );
}

export default Events;
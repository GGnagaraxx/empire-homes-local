import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Properties from "../../pages/Properties/Properties";
import SellerGuide from "../../pages/SellerGuide/SellerGuide";
import BuyerGuide from "../../pages/BuyerGuide/BuyerGuide";
import Guides from "../../pages/Guides/Guides";
import ContactUs from "../../pages/ContactUs/ContactUs";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Property from "../../pages/Property/Property";
import ReservationModal from "../ReservationModal/ReservationModal";
import JoinUsModal from "../JoinUsModal/JoinUsModal";
import PrivacyPolicyModal from "../PrivacyPolicyModal/PrivacyPolicyModal";
import Notification from "../Alert/Notification";
import ScrollWrapper from "./components/ScrollWrapper";


function AppRouter() {

    return (
        <BrowserRouter>
            <ScrollWrapper>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/properties" element={<Properties />} />
                    <Route path="/properties/:id" element={<Property />} />
                    <Route path="/seller-guide" element={<SellerGuide />} />
                    <Route path="/buyer-guide" element={<BuyerGuide />} />
                    <Route path="/guides" element={<Guides />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer />

                <JoinUsModal />
                <ReservationModal />
                <PrivacyPolicyModal />
                <Notification />
            </ScrollWrapper>
        </BrowserRouter>
    )
}

export default AppRouter;
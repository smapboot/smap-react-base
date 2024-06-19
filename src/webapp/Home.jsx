import React from "react";
import "./webapp.css";
import Navbar from "./header/Navbar";
import Footer from "./footer/Footer";
import Body from "./body/Body";

const Home = () => {
    return (
        <main className={"app-body"}>
            <Navbar />
                <Body />
            <Footer />
        </main>
    )
}

export default Home;
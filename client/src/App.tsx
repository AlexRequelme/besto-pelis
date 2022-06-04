import React from "react";
import "./App.scss";
import MovieListSection from "./containers/MovieListSection";
import Footer from "./components/Footer";
import MovieBannerSection from "./containers/MovieBannerSection";
import Header from "./containers/Header";

function App() {
    return (
        <>
            <Header />
            <div className="w-4/5 mx-auto">
                <MovieBannerSection />
                <div className="bg-gray-100 px-4">
                    <MovieListSection movies={["1", "2", "3", "4"]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;

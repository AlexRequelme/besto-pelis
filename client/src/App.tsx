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
            <div className="w-4/5 mx-auto py-8 flex flex-col gap-8">
                <MovieBannerSection />
                <div className="bg-white px-4 py-8 rounded-md">
                    <MovieListSection movies={["1", "2", "3", "4"]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;

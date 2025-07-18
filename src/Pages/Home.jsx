import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-20 pb-20 flex flex-col items-center">
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home;
import React from "react";
import Header from "../Components/Header";
import Blogs from "../Components/Blogs";
import Pagination from "../Components/Pagination";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <div className="pt-16 sm:pt-20 pb-12 sm:pb-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Latest Blog Posts
                        </h1>
                        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
                            Discover amazing articles, tutorials, and insights from our community of writers.
                        </p>
                    </div>
                    <Blogs />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Home;